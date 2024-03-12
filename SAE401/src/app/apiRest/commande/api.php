<?php

// Définir les en-têtes pour autoriser les requêtes depuis n'importe quel domaine (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

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

// Vérifier si des résultats sont retournés
if ($statement->rowCount() > 0) {
    // Tableau pour stocker les résultats
    $boxes_arr = array();
    $boxes_arr["boxes"] = array();

    // Boucler à travers chaque ligne de résultat
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        // Créer un item pour chaque box
        $box_item = array(
            "id_box" => $id_box,
            "nom_box" => $nom_box,
            "nb_piece" => $nb_piece,
            "prix" => $prix,
            "aliments" => $aliments,
            "saveurs" => $saveurs
        );

        // Ajouter l'item à la liste des boxes
        array_push($boxes_arr["boxes"], $box_item);
    }

    // Répondre avec un code 200 OK et encoder en JSON
    http_response_code(200);
    echo json_encode($boxes_arr);
} else {
    // Répondre avec un code 404 Not Found si aucune box n'est trouvée
    http_response_code(404);
    echo json_encode(array("message" => "Aucune box trouvée."));
}

?>
