<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$mail = $_POST['email'];
$id = $_POST['id'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $name ." ". $lastname .",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Su Id es: " . $id . " \r\n";
$mensaje .= "Su telefono es: " . $phone . " \r\n";
$mensaje .= "Mensaje: " . $_POST['message'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$to = 'vjpb881104@gmail.com';
$subject = 'Mensaje de mi sitio web';

mail($to, $subject, utf8_decode($mensaje), $header);

header("Location:index.html");
?>