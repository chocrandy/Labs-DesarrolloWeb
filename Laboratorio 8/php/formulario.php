<?php
    $mysqli = new mysqli("localhost", "root", "", "web");
    if ($mysqli->connect_errno) {
        echo "Falló la conexión con MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    else
    {
        //recuperar las variables del formulario 
        $nombreCompleto = $_POST['txtNombreApellido'];
        $correo = $_POST['txtCorreo'];
        $mensaje = $_POST['txtAyuda'];
        //verificamos que se ejecute correctamente el query
        if (!$mysqli->query("INSERT INTO datos (nombreCompleto, correo, mensaje) VALUES ('$nombreCompleto', '$correo', '$mensaje')")) 
        {
            echo "Falló la creación de la tabla: (" . $mysqli->errno . ") " . $mysqli->error;
        }
        else
        {
            echo "Datos guardados correctamente! ";
        }    
    }
?>
<br> <a href='PaginaWebLab8.html'> Volver </a>