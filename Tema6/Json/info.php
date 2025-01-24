<?php
error_reporting(0);

// Array de películas
$peliculas = array(
    array(
        "titulo" => "La La Land",
        "director" => "Damien Chazelle",
        "anio" => 2016,
        "genero" => "Musical"
    ),
    array(
        "titulo" => "Inception",
        "director" => "Christopher Nolan",
        "anio" => 2010,
        "genero" => "Ciencia ficción"
    ),
    array(
        "titulo" => "The Shawshank Redemption",
        "director" => "Frank Darabont",
        "anio" => 1994,
        "genero" => "Drama"
    )
);

$peliculasjson = json_encode($peliculas);
echo $peliculasjson;

?>