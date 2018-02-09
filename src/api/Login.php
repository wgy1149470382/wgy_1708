<?php
    require('connect.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;

    //判断用户名是否存在
    $data = $conn->query("select * from log where username='$username'");

    if($data->num_rows == 0){
        //密码md5加密
        $password = md5($password);

        //写入数据
        $sql = "insert into log(username,password) values('$username','$password')";

        $res = $conn->query($sql);

        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }

?>