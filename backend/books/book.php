<?php
    class Book{

        // conn
        private $conn;

        // table
        private $dbTable = "book";

        // col
        public $id;
        public $title;
        public $author;
        public $description;
        public $image;
       
        
       
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET group
        public function getBook(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
        public function getSingleBook(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable ." WHERE " . $this->id;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        //CREATE User
        public function createBook(){
          
                $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    title = :title, 
                    description = :description, 
                    image = :image, 
                    author = :author";

                $stmt = $this->conn->prepare($sqlQuery);
        
                // sanitize
                $this->title=htmlspecialchars(strip_tags($this->title));
                $this->description=htmlspecialchars(strip_tags($this->description));
                $this->image=htmlspecialchars(strip_tags($this->image));
                $this->author=htmlspecialchars(strip_tags($this->author));
                
                       
                // bind data
                $stmt->bindParam(":title", $this->title);
                $stmt->bindParam(":description", $this->description);
                $stmt->bindParam(":image", $this->image);
                $stmt->bindParam(":author", $this->author);
               
                if($stmt->execute()){
                   return true;
                }
                return false;


            
                    
        
            
        }

       // GET User
    //    public function getSingleUser(){
    //     $sqlQuery = "SELECT
    //                 id, 
    //                 user_name, 
    //                 email
    //               FROM
    //                 ". $this->dbTable ."
    //             WHERE 
    //                id = :id
    //             LIMIT 0,1";

    //     $stmt = $this->conn->prepare($sqlQuery);
    //     $stmt->bindParam(":id", $this->id);
    //     $stmt->execute();
    //     $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
    //     $this->user_name = $dataRow['user_name'];
    //     // $this->last_name = $dataRow['last_name'];
    //     $this->email = $dataRow['email'];
      
    // }      
        

       // UPDATE group
        public function updatebook(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    title = :title, 
                    author = :author,
                    image = :image,
                    description = :description
                    
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->title=htmlspecialchars(strip_tags($this->title));
            $this->author=htmlspecialchars(strip_tags($this->author));
            $this->image=htmlspecialchars(strip_tags($this->image));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":author", $this->author);
            $stmt->bindParam(":image", $this->image);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

    //    // DELETE User
    //     function deleteUser(){
    //         $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
    //         $stmt = $this->conn->prepare($sqlQuery);
        
    //         $this->id=htmlspecialchars(strip_tags($this->id));
        
    //         $stmt->bindParam(1, $this->id);
        
    //         if($stmt->execute()){
    //             return true;
    //         }
    //         return false;
    //     }

    
      
    }      
?>