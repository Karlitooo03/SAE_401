<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Connexion à la base de données
$pdo = new PDO("mysql:host=localhost;dbname=sae401", "root", "root");

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        // Récupérer toutes les saveurs
        $sort_by = isset($_GET['sort_by']) ? $_GET['sort_by'] : null;
        $query = "SELECT * FROM saveur";

        // Vérifier si un paramètre de tri est spécifié
        if ($sort_by === 'nom' || $sort_by === 'quantite') {
            // Ajouter l'ordre de tri à la requête
            $query .= " ORDER BY $sort_by ASC";
        }

        $statement = $pdo->query($query);
        $saveurs_arr = array();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $saveurs_arr[] = $row;
        }
        echo json_encode($saveurs_arr);
        break;
    case 'POST':
        // Créer une nouvelle saveur
        $data = json_decode(file_get_contents("php://input"));
        $nom = $data->nom;
        $quantite = $data->quantite;

        $query = "INSERT INTO saveur (nom, quantite) VALUES (:nom, :quantite)";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nom", $nom);
        $stmt->bindParam(":quantite", $quantite);
        if ($stmt->execute()) {
            echo json_encode("Saveur créée.");
        } else {
            echo json_encode("Impossible de créer la saveur.");
        }
        break;
    case 'PUT':
        // Mettre à jour une saveur existante
        $data = json_decode(file_get_contents("php://input"));
        $id_saveur = $data->id_saveur;
        $nom = $data->nom;
        $quantite = $data->quantite;

        $query = "UPDATE saveur SET nom = :nom, quantite = :quantite WHERE id_saveur = :id_saveur";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nom", $nom);
        $stmt->bindParam(":quantite", $quantite);
        $stmt->bindParam(":id_saveur", $id_saveur);
        if ($stmt->execute()) {
            echo json_encode("Saveur mise à jour.");
        } else {
            echo json_encode("Impossible de mettre à jour la saveur.");
        }
        break;
    case 'DELETE':
        // Supprimer une saveur
        $data = json_decode(file_get_contents("php://input"));
        $id_saveur = $data->id_saveur;

        $query = "DELETE FROM saveur WHERE id_saveur = :id_saveur";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":id_saveur", $id_saveur);
        if ($stmt->execute()) {
            echo json_encode("Saveur supprimée.");
        } else {
            echo json_encode("Impossible de supprimer la saveur.");
        }
        break;
}
?>
