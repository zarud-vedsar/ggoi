<?php
// Handle preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
    exit(0); // Stop execution for OPTIONS requests
}

// Allow all domains to access the resource
header("Access-Control-Allow-Origin: *");
// Allowed HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
// Allowed headers
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
header("Access-Control-Allow-Credentials: true");

// Include the autoload file to load required classes and dependencies
require_once('autoload.php');
// Load and initialize PHPMailer library for sending emails
require_once("../phpmailer/vendor/autoload.php");

// Import necessary PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer(true);

// Include any helper functions needed
require_once('HelperFunction.php');

// Handle POST requests: Check if 'data' parameter exists and is not empty
// Executes the function specified in 'data' key from POST request
if (isset($_POST['data']) && !empty($_POST['data'])) {
    $_POST['data']($mail); // Ensure 'data' contains a valid callable function name
}

// Handle GET requests: Check if 'data' parameter exists and is not empty
// Executes the function specified in 'data' key from GET request
if (isset($_GET['data']) && !empty($_GET['data'])) {
    $_GET['data'](); // Ensure 'data' contains a valid callable function name
}
function toggleStatus($id, $table)
{
    global $action;

    $exist = $action->db->sql("SELECT status FROM $table WHERE id = {$id} AND delete_status = 0");
    if (!$exist) {
        http_response_code(404);
        echo $action->db->json(404, "Data not found.");
        return;
    }
    $status = $exist[0]['status'];
    $update = $action->db->update($table, "id = {$id}", [
        'status' => $status == 1 ? 0 : 1
    ]);
    if (!$update) {
        http_response_code(500);
        echo $action->db->json(500, "Something went wrong.");
        return;
    }
    http_response_code(200);
    echo $action->db->json(200, "Status toggled successfully.", null, $status);
}
function toggleDeleteStatus($id, $table)
{
    global $action;

    $exist = $action->db->sql("SELECT delete_status FROM $table WHERE id = {$id}");
    if (!$exist) {
        http_response_code(404);
        echo $action->db->json(404, "Data not found.");
        return;
    }
    $status = $exist[0]['delete_status'];
    $field = ['delete_status' => $status == 1 ? 0 : 1];
    if($status == 0){
        $field['deleted_date'] = date('Y-m-d H:i:s');
    }else{
        $field['deleted_date'] = null;
    }
    $update = $action->db->update($table, "id = {$id}", $field);
    if (!$update) {
        http_response_code(500);
        echo $action->db->json(500, "Something went wrong.");
        return;
    }
    http_response_code(200);
    echo $action->db->json(200, $status == 1 ? "Data recovered successfully.":"Date deleted successfully.", null, $status);
}
?>