<?php

// file
$file = '';
foreach ($_POST as $key => $value){
    if ($key == 'buyminSum'){
        break;
    }
    // echo "$key:$value<br>";
    $file .= "$key:$value\n";
}
$file .= "運費$60元\n";
$file .= '小計' . ':' . '$'. $_POST['buyminSum'] . "\n" . '元';
$file .= '總計' . ':' . '$'. $_POST['buySum'] . '元';
$fp = fopen('file/帳單.txt','w');
fwrite($fp,$file);
fclose($fp);


// mysql
$db = new PDO('mysql:host=localhost;dbname=test','admin','1234');
$sql = $db->prepare('insert into uorder(product1,product2,product3,product4,product5,SumMoney) values(:pd1,:pd2,:pd3,:pd4,:pd5,:sum)');
$i = 0;
foreach($_POST as $key => $value){
    $i ++;
    if ($key == 'buyminSum'){
        break;
    }
    echo 'pd'."$i";
    echo $key.':'.$value.'<br>';
        $sql->bindValue('pd'."$i",$value);
}
echo $_POST['buySum'];
$sql->bindValue('sum',$_POST['buySum']);
$sql->execute();
header('location:./');