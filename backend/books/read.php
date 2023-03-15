<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once '../config.php';
    include_once './book.php';

    $database = new DB();
    $db = $database->getConnection();

    $books = new Book($db);

    $stmt = $books->getBook();
    $itemCount = $stmt->rowCount();

    if($itemCount > 0){
        
        $bookArr = array();
       
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "title" => $title,
                "author" => $author,
                "description" => $description,
                "image" => $image
            );

            array_push($bookArr, $e);
        }
        echo json_encode($bookArr);
    }
    else{
        echo json_encode('');
    }

?>