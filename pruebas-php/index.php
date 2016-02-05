<?php include("header.php"); ?>
<div id="contenedor">

  <form  method="post">
    <div id="usuario" class="">
        <h1 class="centrar titulo">Log in </h1>
            <input class="bordes" type="text" name="usuario">

          <div id="pw" class="">
            <input class="bordes" type="password" name="pw">
          </div>

          <div id="submit">
            <input class="boton" type="submit" name="enviar" value="Submit">
          </div>

    </div>
  </form>

</div>
<div class="centrar titulo-error">
  <?php
    if(isset($_POST['enviar']))
       {
          $nombre = $_POST['usuario'];
          $pw = $_POST['pw'];

          if($nombre == "nico" and $pw == "nicolas")
          {
            header('Location: proyectos.php');
          }
          else {
            include("usuario_error.php");
          }
       }
    ?>
</div>
<?php include("footer.php"); ?>
