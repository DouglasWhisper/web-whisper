<?php

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$massage = $_POST['massage'];

$pdo = new PDO('mysql:host=localhost; dbname=whisperdb;', 'root', '');
$stmt = $pdo->prepare('INSERT INTO users (firstname, lastname, email, massage) VALUES (:fn, :ln, :em, :ma)');
$stmt->bindValue(':fn', $firstname);
$stmt->bindValue(':ln', $lastname);
$stmt->bindValue(':em', $email);
$stmt->bindValue(':ma', $massage);
$stmt->execute();

if ($stmt->rowCount() >= 1) {
  echo 'Comentario salvo com sucesso';
}  else {
  echo 'Falha ao salvar os dados';
}
