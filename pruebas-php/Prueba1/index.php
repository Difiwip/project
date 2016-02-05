<?php include("header.php"); ?>

<form class=""  method="post">
  <input name="nombres[]" multiple="yes" type="text"/>
  <input type="submit" multiple="yes" name="name" value="Enviar">
</form>

<?php
  if(isset($_POST['name']))
  {
    $nombres1 = $_POST['nombres'];
    print_r($nombres1);
  }
 ?>

<?php include("footer.php"); ?>
