<?php
// Enable error reporting for debugging
// Remove or change these settings in production
ini_set('display_errors', 1);
error_reporting(E_ALL);

$dbhost = '172.20.128.78:3306';
$dbuser = 'adminusr';
$dbpass = 'Skole123';
$dbname = 'login';

$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Escape user inputs for security
    $input_username = $conn->real_escape_string($_POST['username']);
    $input_password = $conn->real_escape_string($_POST['password']);

    // Modified to use prepared statements for improved security
    $sql = $conn->prepare("SELECT usr, pas FROM login WHERE usr = ?");
    $sql->bind_param("s", $input_username);
    $sql->execute();
    $result = $sql->get_result();

    if (!$result) {
        die('Error in SQL query: ' . $conn->error);
    }

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $stored_password = $row['pas']; // Assuming 'pas' is the password column

        if ($input_password === $stored_password) {
            echo "<script>window.location.href = 'website.php';</script>";
            exit();
        } else {
            $message = "Invalid username or password. Please try again.";
        }
    } else {
        $message = "Invalid username or password. Please try again.";
    }
    $sql->close();
}

$conn->close();
?>