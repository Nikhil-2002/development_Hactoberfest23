<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "andrabimubi@gmail.com"; 
  $from = $_POST["email"];
  $message = $_POST["message"];
  $subject = "New Contact Form Submission";

  // Additional headers
  $headers = "From: $from" . "\r\n";

  // Send email
  mail($to, $subject, $message, $headers);
}
?>
