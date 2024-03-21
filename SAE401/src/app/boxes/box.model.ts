export interface Box {
  id: number;
  nom_box: string;
  description: string; // Ajoutez cette ligne si la description est nécessaire
  prix: number;
  quantity: number;
  category: string;
  nb_piece: number;
  aliments: string;
  saveurs: string;
  // imageUrl: string
}