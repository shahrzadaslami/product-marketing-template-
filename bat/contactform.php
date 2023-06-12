<?php
$message_sent = false;

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "YOUREMAIL@example.com";
    $headers = "From: " . $email;
    $txt = "YOU HAVE RECEIVED AN EMAIL" . "\r\n" . $message;

    mail($mailTo, $headers, $txt);



    echo "<script>alert('Thank you!');window.location='../';</script>";
}
