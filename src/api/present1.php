<?php
    //引入其他文件
    require('connect.php');

    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
    //编写Spl语句
    $sql = 'select * from t_present';

    //查询Sql语句
    $res = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row  = $res->fetch_all(MYSQLI_ASSOC);
    // $row = $result->fetch_assoc();

    $res = array(
        //array_slice — 从数组中取出一段
        'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
        //获取数字总长度
        'total'=>count($row),
        'qty'=>$qty,
        //*1转成数字类型
        'pageNo'=>$page_no*1
    );

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>