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
      $sql="INSERT INTO Officer (Username, Password,Timestamp)
      VALUES ('$username', '$password',now())" ;
      $result = $conn->query($sql);
      if ($conn->query($sql) === TRUE){
        echo "Check-in successfull!";
      }

      else{
        echo "unsuccessfull!";
      }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Officer login</title>
    <link href='admin.css' rel='stylesheet' type='text/css'>
</head>
<body>
    <form id="update" method="POST">
    <div class="logo"></div>
    <div class="login-block">
        <h1>Officer login</h1>
        <input type="text" value="" placeholder="Username" id="username" name="username" />
        <input type="password" value="" placeholder="Password" id="password" name="password"/>
        <input type="submit" name="submit" value="Check-in" id="submit"/>
    </div>
    </form>
    <script>   
const getlocation=()=>{
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
        var loc=position;
        console.log(loc);   
    });
}   
}
document.getElementById("submit").onsubmit = getlocation();
</script>
</body>
</html> 