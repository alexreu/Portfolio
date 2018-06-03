<?php

$errors = [];

if(!array_key_exists('name', $_POST) || $_POST['name'] ==''){

    $errors['name'] = "You have not provide your name and your surname";
}

if(!array_key_exists('mail', $_POST) || $_POST['mail'] =='' || !filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)){

    $errors['mail'] = "You have not provide your email adress";
}
if(!array_key_exists('subject', $_POST) || $_POST['subject'] =='' ){

    $errors['subject'] = "You have not provide your subject";
}
if(!array_key_exists('message', $_POST) || $_POST['message'] ==''){

    $errors['message'] = "You have note provide your message";
}
/*var_dump($errors);
die();*/
session_start();

if(!empty($errors)){
    $_SESSION['errors'] = $errors;
    $_SESSION['input'] = $_POST;
    header('Location:../index-EN.php#contact');
}else{
    $_SESSION['success'] = 1;
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = 'FROM: '.$name.' <'.$mail.'>'."\r\n";
    mail('contact@alexandreadolphe.com', $subject, $message, $headers);
    header('Location:../index-EN.php#contact');
}

die();

?>