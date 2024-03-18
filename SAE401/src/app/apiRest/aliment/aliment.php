<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Connexion à la base de données
$pdo = new PDO("mysql:host=localhost;dbname=sae401", "root", "root");

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        // Récupérer tous les aliments
        $sort_by = isset($_GET['sort_by']) ? $_GET['sort_by'] : null;
        $query = "SELECT * FROM aliment";

        // Vérifier si un paramètre de tri est spécifié
        if ($sort_by === 'nom' || $sort_by === 'quantite') {
            // Ajouter l'ordre de tri à la requête
            $query .= " ORDER BY $sort_by ASC";
        }

        $statement = $pdo->query($query);
        $aliments_arr = array();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $aliments_arr[] = $row;
        }
        echo json_encode($aliments_arr);
        break;
    case 'POST':
        // Créer un nouvel aliment
        $data = json_decode(file_get_contents("php://input"));
        $nom = $data->nom;
        $quantite = $data->quantite;

        $query = "INSERT INTO aliment (nom, quantite) VALUES (:nom, :quantite)";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nom", $nom);
        $stmt->bindParam(":quantite", $quantite);
        if ($stmt->execute()) {
            echo json_encode("Aliment créé.");
        } else {
            echo json_encode("Impossible de créer l'aliment.");
        }
        break;
    case 'PUT':
        // Mettre à jour un aliment existant
        $data = json_decode(file_get_contents("php://input"));
        $id_aliment = $data->id_aliment;
        $nom = $data->nom;
        $quantite = $data->quantite;

        $query = "UPDATE aliment SET nom = :nom, quantite = :quantite WHERE id_aliment = :id_aliment";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":nom", $nom);
        $stmt->bindParam(":quantite", $quantite);
        $stmt->bindParam(":id_aliment", $id_aliment);
        if ($stmt->execute()) {
            echo json_encode("Aliment mis à jour.");
        } else {
            echo json_encode("Impossible de mettre à jour l'aliment.");
        }
        break;
    case 'DELETE':
        // Supprimer un aliment
        $data = json_decode(file_get_contents("php://input"));
        $id_aliment = $data->id_aliment;

        $query = "DELETE FROM aliment WHERE id_aliment = :id_aliment";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":id_aliment", $id_aliment);
        if ($stmt->execute()) {
            echo json_encode("Aliment supprimé.");
        } else {
            echo json_encode("Impossible de supprimer l'aliment.");
        }
        break;
}
?>
