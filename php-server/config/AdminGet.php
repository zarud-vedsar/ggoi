<?php
class AdminGet extends Database

{
  public function get_table_data($tableid, $filter = [], $orderclause = null, $columns = null)

  {
    // Initialize base query
    if ($columns == null) {

      $sql = "SELECT * FROM " . $this->getTable($tableid);
    } else {

      $sql = "SELECT $columns FROM " . $this->getTable($tableid);
    }
    // Check if filter is provided
    if (sizeof($filter) > 0) {
      $conditions = [];
      // Iterate through each filter key and add it to the conditions
      foreach ($filter as $key => $value) {
        $conditions[] = "$key = '$value'";
      }

      // Append conditions to the query
      $sql .= " WHERE " . implode(' AND ', $conditions);
    }

    // Add ordering
    if ($orderclause != null) {
      $sql .= " " . $orderclause;
    } else {

      $sql .= " ORDER BY id DESC";
    }
    $result = $this->sql($sql);
    // Return results
    return $result ?: false;
  }

  

  
}
