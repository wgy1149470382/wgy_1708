<?php
    require('connect.php');

    //获取前端数据
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    $password = md5($password);

    $sql = "select * from log where username='$username' and password='$password'";

    $result = $conn->query($sql);

    if($result->num_rows > 0){
        echo "success";
    }else{
        echo "fail";
    }

?>