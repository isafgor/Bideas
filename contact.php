<?php
    $to      = 'galla9932@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
mail(
    $to,
    $subject,
    'Имя потенциального клиента: '.$name.
    '. Его контакт: '.$email.
    '. Его сообщение: '.$message
);
?>