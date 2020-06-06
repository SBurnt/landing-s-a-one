<?php

$userphone = $_POST['phone'];
$username = $_POST['name'];
$useramount = $_POST['amount'];
$userregion = $_POST['region'];
$usercity = $_POST['city'];
$usergender = $_POST['gender'];
$userbirthday = $_POST['birthday'];

$userdate = date('Y-m-d H:i:s');

echo ' userphone ' . $userphone;
echo ' username ' .  $username;
echo ' useramount ' .  $useramount;
echo ' userregion ' . $userregion;
echo ' usercity ' .  $usercity;
echo ' usergender ' .  $usergender;
echo ' userbirthday ' .  $userbirthday;
