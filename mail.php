<?php

$recepient = "gentlemens.minsk.biz@gmail.com";
$sitename = "Сайт по продаже клетчатых спортивных костюмов";

$name = trim($_POST["user_name"]);
$address = trim($_POST["user_address"]);
$email = trim($_POST["user_email"]);
$phone = trim($_POST["user_phone"]);
$suitName = trim($_POST["suit_name"]);
$suitSize = trim($_POST["suit_size"]);
$message = "ФИО: $name \nАдрес: $address \nEmail: $email \nТелефон: $phone \nНазвание костюма: $suitName \nРазмер: $suitSize";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>