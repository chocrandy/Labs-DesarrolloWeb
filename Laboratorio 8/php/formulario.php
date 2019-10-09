<?php
    //conectarnos con el servidor 
    //$conectar = mysql_connect('localhost', 'root', '');
    //Creas una variable de tipo objeto mysqli con los datos de la bd y el charset que quieras
    $conectar = new mysqli('127.0.0.1', 'root', '', 'web');
    $conectar->set_charset("utf8");
    //verificamo que la conexion sea correcta 
    if (!$conectar) 
    {
        echo "No se pudo conectar con el servidor";        
    }
    else
    {
        //$base = mysql_select_db('web');
        //if (!$base) 
        //{
            echo "No se encontro la BD Web";
        //}
    }
    //recuperar las variables del formulario 
    $nombreCompleto = $_POST['txtNombreApellido'];
    echo "mi variable es: " . $nombreCompleto;
    $correo = $_POST['txtCorreo'];
    $mensaje = $_POST['txtAyuda'];
    //hacemos la sentencia de sql para guardar los datos 
    $sql = "INSERT INTO datos VALUES ('$nombreCompleto', '$correo', '$mensaje')";
    //ejecutamos la sentencia 
    $ejecutar = mysql_query($sql);
    //verificamos la ejecucion del query
    if (!$ejecutar) 
    {
        echo "Hubo algun error!";
    }
    else
    {
        echo "Datos guardados correctamente! ";
    }
    //<br> <a href='PaginaWebLab8.html'> Volver </a>
?>
<br> <a href='PaginaWebLab8.html'> Volver </a>