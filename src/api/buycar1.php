<?php
    //引入其他文件
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    //编写Spl语句
    $sql = "select * from t_present where";

    if($id){
        $sql .= " id='$id' and";
    }

    $sql .= ' 1=1';

    //查询Sql语句
    $res = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row  = $res->fetch_all(MYSQLI_ASSOC);
    // $row = $result->fetch_assoc();

    $date;
    foreach ($row as $item) {
        if($item->id == $id){
            $item->qty++;
            $date = $item;
        }
    }


    echo json_encode($date,JSON_UNESCAPED_UNICODE);
?>