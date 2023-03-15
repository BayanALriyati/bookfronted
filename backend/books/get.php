<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once '../config.php';
    include_once './book.php';

    $database = new DB();
    $db = $database->getConnection();
    $id = $_GET['id'];
    $sqlQuery = "SELECT * FROM book WHERE id = $id";
    $stmt = $db->prepare($sqlQuery);
    $stmt->execute();
    $book = $stmt->fetch(PDO::FETCH_ASSOC);
    print_r(json_encode($book));
?>