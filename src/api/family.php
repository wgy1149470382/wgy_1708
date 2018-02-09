<?php
    //引入其他文件
    require('connect.php');
    //编写Spl语句
    $sql = 'select * from t_family';

    //查询Sql语句
    $res = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row  = $res->fetch_all(MYSQLI_ASSOC);
    // $row = $result->fetch_assoc();



    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>