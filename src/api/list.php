<?php
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    $sql = "select * from t_present where";

    if($id){
        $sql .= " id='$id' and";
    }

    $sql .= ' 1=1';

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>