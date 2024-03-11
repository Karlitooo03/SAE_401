// boxes.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Box } from './box.model';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  private boxes: Box[] = [
    { id: 1, name: 'Box A', description: 'Description A', price: 101, quantity: 0 },
    { id: 2, name: 'Box B', description: 'Description B', price: 150, quantity: 0 },
    { id: 3, name: 'Box C', description: 'Description C', price: 15, quantity: 0 },
    { id: 4, name: 'Box D', description: 'Description D', price: 27, quantity: 0 },
    { id: 5, name: 'Box E', description: 'Description E', price: 96, quantity: 0 },
    { id: 6, name: 'Box F', description: 'Description F', price: 67, quantity: 0 },
    { id: 7, name: 'Box G', description: 'Description G', price: 55, quantity: 0 },
    
  ];

  getBoxes(): Observable<Box[]> {
    return of(this.boxes);
  }

  getBoxDetails(id: number): Box {
    // Ajoutez la logique pour récupérer les détails de la boîte
    return this.boxes.find((box) => box.id === id) || { id: 0, name: '', description: '', price: 0, quantity: 0 };
  }
}
