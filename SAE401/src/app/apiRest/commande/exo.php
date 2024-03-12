<?php

// Connexion à la base de données
$pdo = new PDO("mysql:host=localhost;dbname=sae401", "root", "root");

// Requête pour récupérer toutes les boxes avec leurs aliments et saveurs associés
$query = "
    SELECT b.id_box, b.nom AS nom_box, b.nb_piece, b.prix,
           GROUP_CONCAT(DISTINCT a.nom SEPARATOR ', ') AS aliments,
           GROUP_CONCAT(DISTINCT s.nom SEPARATOR ', ') AS saveurs
    FROM box b
    LEFT JOIN box_aliment ba ON b.id_box = ba.id_box
    LEFT JOIN box_saveur bs ON b.id_box = bs.id_box
    LEFT JOIN aliment a ON ba.id_aliment = a.id_aliment
    LEFT JOIN saveur s ON bs.id_saveur = s.id_saveur
    GROUP BY b.id_box;
";

// Exécution de la requête
$statement = $pdo->query($query);

// Affichage des résultats
while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    echo "ID Box: {$row['id_box']}<br>";
    echo "Nom Box: {$row['nom_box']}<br>";
    echo "Nombre de pièces: {$row['nb_piece']}<br>";
    echo "Prix: {$row['prix']}<br>";
    echo "Aliments: {$row['aliments']}<br>";
    echo "Saveurs: {$row['saveurs']}<br><br>";
}

?>
