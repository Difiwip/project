<?php include("header.php"); ?>

<div id="navegacion" class="">
  <h1>¿Quien sos?</h1>
    <form  method="post">
      <input class="bordes" type="text" name="usuario">
      <input class="boton" type="submit" name="enviar" value="Enviar">
    </form>
</div>
<div class="letra-grande centrar">
  <?php
    if(isset($_POST['enviar']))
       {
          $nombre = $_POST['usuario'];
          if ($nombre != "nico") {
            include("usuario_error.php");
          }
          else {
            header('Location: proyectos.php');
          }
       }
    ?>
</div>

<?php include("footer.php"); ?>
