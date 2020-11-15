<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';
$mail -> setLanguage('ru','phpmailer/language/');
$mail ->IsHTML(true);

// від кого////////////////////

$mail ->setFrom('мій сайт');

// кому відправляємо
$mail ->addAddress('zaperova@gmail.com');
// тема листа
$mail ->Subject ='Вам лист з сайту';

// тіло листа
$body ='<h1>лист з сайту</h1>';
if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Імя</strong>'.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail</strong>'.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Повідомлення</strong>'.$_POST['message'].'</p>';
}

$mail ->Body = $body;

// відпаравка
if (!$mail->send()){
    $message = 'Помилка';
}else{
    $message = 'Дані відпрвлено';
}

$response = ['message'=>$message];

header('Content - type: application/json');
echo json_encode($response);

?>