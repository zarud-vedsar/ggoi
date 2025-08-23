<?php

class Database
{
    private $servername = 'localhost';
    protected $httpHost;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    // Table mapping for easier referencing of tables (can be extended in future)
    /**
     * Retrieve the table name based on index.
     * 
     * @param int $index
     * @return string|null
     */
    public function getTable($index)
    {
        $tables = [
            
            
        ];
        return isset($tables[$index]) ? $tables[$index] : null;
    }

    /**
     * Database constructor initializes the connection.
     */
    public function __construct()
    {
        $this->httpHost = strtolower($_SERVER['HTTP_HOST']);
        $this->setDatabaseParameters();
        $this->initializeConnection();
    }

    /**
     * Set database connection parameters.
     * Defaults to localhost MySQL credentials.
     */
    private function setDatabaseParameters()
    {
        $this->username = 'root';   // Default username
        $this->password = '';       // Default password
        $this->dbname = 'cruise';      // Default database name
    }

    /**
     * Initialize the PDO connection for the database.
     * Uses prepared statements for secure database interactions.
     */
    private function initializeConnection()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("SET CHARACTER SET utf8");
        } catch (PDOException $e) {
            // Handle exception (logging, etc.)
        }
    }
    
    
    /**
     * Calculate total days between two dates.
     * 
     * @param string $startDate
     * @param string $endDate
     * @return int
     */
    public function getTotalDaysBetweenDates($startDate, $endDate)
    {
        $startDateTime = new DateTime($startDate);
        $endDateTime = new DateTime($endDate);
        $dateInterval = $startDateTime->diff($endDateTime);
        return $dateInterval->days;
    }

    /**
     * Create a URL-friendly slug from a string.
     * 
     * @param string $string
     * @return string
     */
    public function createSlug($string)
    {
        $slug = strtolower($string);
        $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug); // Remove special characters
        $slug = preg_replace('/[\s-]+/', '-', $slug); // Replace spaces with hyphens
        return trim($slug, '-');
    }

    /**
     * Format a number as Indian currency (INR).
     * 
     * @param float $number
     * @return string
     */
    public function formatIndianCurrency($number)
    {
        return number_format($number, 2, '.', ',');
    }
    
    /**
     * Validate and sanitize POST data.
     * 
     * @param string $data
     * @return mixed
     */
    public function validatePostData($data)
    {
        if (isset($_POST[$data]) && !empty($this->sanitizeClientInput($_POST[$data]))) {
            return $this->sanitizeClientInput($_POST[$data]);
        }
        return false;
    }

    /**
     * Validate and sanitize GET data.
     * 
     * @param string $data
     * @return mixed
     */
    public function validateGetData($data)
    {
        if (isset($_GET[$data]) && !empty($this->sanitizeClientInput($_GET[$data]))) {
            return $this->sanitizeClientInput($_GET[$data]);
        }
        return false;
    }

    /**
     * Get the full domain name (including protocol).
     * 
     * @return string
     */
    public function getDomain()
    {
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http';
        return $protocol . '://' . $_SERVER['HTTP_HOST'];
    }



    /**
     * Sanitize user input by stripping unwanted characters.
     * 
     * @param string $form_data
     * @return string
     */
    public function sanitizeClientInput($form_data)
    {
        if ($form_data !== null) {
            $form_data = trim($form_data);
            $form_data = stripslashes($form_data);
            $form_data = strip_tags($form_data);
            $form_data = htmlspecialchars($form_data, ENT_QUOTES, 'UTF-8', false);
            $form_data = preg_replace('/on\w+="[^"]*"/i', '', $form_data); // Strip JavaScript events (on* attributes)
        }
        return $form_data;
    }

    /**
     * Create a directory if it doesn't exist.
     * 
     * @param string $path
     */
    public function make_dir($path)
    {
        if (!is_dir($path)) {
            mkdir($path, 0755, true);
        }
    }

    /**
     * Delete a file if it exists.
     * 
     * @param string $filePath
     * @param string $unlinkField
     */
    public function deleteFileIfExists(string $filePath, string $unlinkField)
    {
        $filename = $this->sanitizeClientInput(isset($_POST[$unlinkField]) ? $_POST[$unlinkField] : '');
        if (!empty($filename)) {
            $fullPath = $filePath . DIRECTORY_SEPARATOR . $filename;
            if (file_exists($fullPath)) {
                unlink($fullPath);
            }
        }
    }

    /**
     * Generate a JSON response for API endpoints.
     * 
     * @param string $status
     * @param string $message
     * @param array $data
     * @return string JSON encoded response
     */
    public function json($status, $message, $key = '', $data = [])
    {
        return json_encode([
            'status' => $status,
            'msg' => $message,
            'key' => $key,
            'data' => $data
        ], JSON_UNESCAPED_UNICODE); // Fixed: JSON_UNESCAPED_UNICODE to avoid issues with special characters
    }

    /**
     * Execute an SQL insert query with parameters.
     * 
     * @param string $sql
     * @param array $params
     * @return bool
     */
    public function sql_insert($sql, $params = [])
    {
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($params);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }

    /**
     * Execute an SQL query with custom conditions (SELECT).
     * 
     * @param string $query
     * @return mixed
     */
    public function sql($query)
    {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            // print_r($query);
            // die;
            return $stmt->fetchAll(PDO::FETCH_ASSOC) ?: false;
        } catch (PDOException $e) {
            return false;
        }
    }

    /**
     * Get the count of records in a table with optional WHERE conditions.
     * 
     * @param string $table
     * @param string $field
     * @param string|null $where
     * @return int|false
     */
    public function count_table($table, $field = 'id', $where = null)
    {
        $table = $this->sanitizeClientInput($table);
        $sql = "SELECT COUNT($field) AS total FROM $table";
        if (!empty($where)) {
            $sql .= " WHERE $where";
        }
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchColumn();
        } catch (PDOException $e) {
            return false;
        }
    }

    /**
     * Insert a record into a table using the prepared statement method.
     * 
     * @param string $table_name
     * @param array $data
     * @return mixed
     */
    public function insert($table_name, $data)
    {
        
        $table_name = $this->sanitizeClientInput($table_name);
        $columns = array_keys($data);
        $placeholders = ':' . implode(', :', $columns);
        $sql = "INSERT INTO " . $table_name . " (" . implode(",", $columns) . ") VALUES (" . $placeholders . ")";
      	$debugSql = $sql; //debugging
        
        try {
            $stmt = $this->conn->prepare($sql);
            foreach ($data as $column => $value) {
              	//if($value=='null' || $value== 'NULL');{
                
                 // $value= null;
               // }
              	
                $stmt->bindValue(':' . $column, $value);
            //  $debugSql = str_replace(':' . $column, $this->conn->quote($value), $debugSql);
            }
          	// print_r($debugSql);
            $stmt->execute();
            return $this->conn->lastInsertId();
        } catch (PDOException $e) {
            // return $e->getMessage();
            return false;
        }
    }

    public function insertMultiple($table_name, $data)
    {
        $table_name = $this->sanitizeClientInput($table_name);
        if (empty($data) || !is_array($data)) {
            return false;
        }

        $columns = array_keys($data[0]);


        $placeholders = [];
        foreach ($data as $row) {
            $placeholders[] = '(' . implode(', ', array_fill(0, count($columns), '?')) . ')';
        }

        $sql = "INSERT INTO " . $table_name . " (" . implode(",", $columns) . ") VALUES " . implode(", ", $placeholders);

        try {
            // Prepare the SQL statement
            $stmt = $this->conn->prepare($sql);

            // Flatten the data array for binding values
            $flattenedData = [];
            foreach ($data as $row) {
                foreach ($row as $value) {
                    $flattenedData[] = $value;
                }
            }

            // Execute the query with the flattened data
            $stmt->execute($flattenedData);
            return true; // return true if the query was successful
        } catch (PDOException $e) {
            return false; // return false if an error occurs
        }
    }


    // ! ||--------------------------------------------------------------------------------||
    // ! ||                                          UPDATE                                ||
    // ! ||--------------------------------------------------------------------------------||  

    public function update($table, $id, $para = array())
    {
        $args = array();
        $table = $this->sanitizeClientInput($table);
        foreach ($para as $key => $value) {
          	
          if(  $value == 'null' || $value == 'NULL'  ){
            $args[] = " $key = null "; 
            
          }
          else{
            $args[] = " $key = '$value' ";
          }
          
                        
          
        }
        $sql11 = "UPDATE  $table SET " . implode(',', $args);
        $sql11 .= " WHERE $id";
        try {
            // echo $sql11;
            // die;
            $stmt = $this->conn->prepare($sql11);
            $stmt->execute();
            return true;  // Update successful
        } catch (PDOException $e) {
            return false;
        }
    }

   

/* ---------------------------------------------------------------
                              Authendicate Request
  ----------------------------------------------------------------*/
    public function AuthendicateRequest()
    {
        $loguserid = $this->validatePostData('loguserid');
        $authenticated = false;
        if ($loguserid ) {
            $authenticated = true;
        }

        return [
            'loguserid' => $loguserid,
            'authenticated' => $authenticated
        ];
    }

    /*-------------------------------------------------------------------------
                             Delete Table
-------------------------------------------------------------------------*/

    
    /*-------------------------------------------------------------------------
                             Toggle Status
-------------------------------------------------------------------------*/

    

    public function getEmailHost()
    {

        $emailsetting = $this->sql("SELECT * FROM " . $this->getTable(4));

        return [
            'email' => @$emailsetting[0]['email'],
            'password' => @$emailsetting[0]['password'],
            'host' => @$emailsetting[0]['mail_host'],
            'port' => @$emailsetting[0]['port_no'],
            'encryption' => @$emailsetting[0]['encryption'],
            'sender' => @$emailsetting[0]['sender_email'],
            'senderName' => @$emailsetting[0]['sender_name'],
        ];
    }

    public function setPostRequiredField($name, $errormessage, $status = 400)
    {
        if (isset($_POST[$name]) && !empty($this->sanitizeClientInput($_POST[$name]))) {
            return $this->sanitizeClientInput($_POST[$name]);
        }
        echo $this->json($status, $errormessage, $name);
        http_response_code($status);
        die;
    }


    


    

    /**
     * Destructor to close database connection.
     */
    public function __destruct()
    {
        $this->conn = null;
    }
}