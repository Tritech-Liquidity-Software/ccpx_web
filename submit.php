<?php
$servername = "localhost";
$username = "root";         // Change if your DB username is different
$password = "";             // Change if your DB password is not empty
$dbname = "trade_requests";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data safely
$first_name = $_POST['firstname'];
$last_name = $_POST['lastname'];
$mobile_no = $_POST['mob_no'];
$email = $_POST['email'];
$description = $_POST['description'];

// Prepare SQL
$sql = "INSERT INTO form_submissions (first_name, last_name, mobile_no, email, description)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $first_name, $last_name, $mobile_no, $email, $description);

if ($stmt->execute()) {
    echo "<script>
            alert('Thank you! Your form has been submitted successfully.');
            window.location.href = 'index.html'; // Redirect to home or wherever
          </script>";
} else {
    echo "<script>
            alert('Oops! Something went wrong. Please try again.');
            window.history.back();
          </script>";
}


$stmt->close();
$conn->close();
?>