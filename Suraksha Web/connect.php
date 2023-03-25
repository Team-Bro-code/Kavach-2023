<?php
$servername = "localhost";
$username = "root";
$password = "harish12345678";
$dbname = "Login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if(!empty($_POST['submit']))
{
      $username=$_POST['username'];
      $password=$_POST['password'];
      $sql="select * from Admin where Username='$username' and Password='$password'" ;
      $result = $conn->query($sql);
      if ($result->num_rows > 0){
        echo "Login successfull!";
        header("Location:https://harish-thangaraj.netlify.app/");
      }

      else{
        echo "Login unsuccessfull!";
      }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin login</title>
    <link href='admin.css' rel='stylesheet' type='text/css'>
</head>
<body>
    <form method="POST">
    <div class="logo"></div>
    <div class="login-block">
        <h1>Admin login</h1>
        <input type="text" value="" placeholder="Username" id="username" name="username" />
        <input type="password" value="" placeholder="Password" id="password" name="password"/>
        <input type="submit" name="submit" value="submit"/>
    </div>
    </form>
    
</body>
</html> 