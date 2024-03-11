// boxes.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Box } from './box.model';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  private boxes: Box[] = [
    { id: 1, name: 'Box 1', description: 'Description 1', price: 10, quantity: 0, category: 'Category 1' },
    { id: 2, name: 'Box 2', description: 'Description 2', price: 20, quantity: 0, category: 'Category 2' },
    { id: 3, name: 'Box 3', description: 'Description 3', price: 15, quantity: 0, category: 'Category 1' },
    { id: 4, name: 'Box 4', description: 'Description 4', price: 25, quantity: 0, category: 'Category 3' },
    { id: 5, name: 'Box 5', description: 'Description 5', price: 13, quantity: 0, category: 'Category 1' },
    { id: 6, name: 'Box 6', description: 'Description 6', price: 76, quantity: 0, category: 'Category 2' },
    { id: 7, name: 'Box 7', description: 'Description 7', price: 24, quantity: 0, category: 'Category 1' },
    { id: 8, name: 'Box 8', description: 'Description 8', price: 52, quantity: 0, category: 'Category 3' },
    { id: 9, name: 'Box 9', description: 'Description 9', price: 32, quantity: 0, category: 'Category 1' },
    { id: 10, name: 'Box 10', description: 'Description 10', price: 35, quantity: 0, category: 'Category 2' },
    { id: 11, name: 'Box 11', description: 'Description 11', price: 53, quantity: 0, category: 'Category 1' },
    { id: 12, name: 'Box 12', description: 'Description 12', price: 12, quantity: 0, category: 'Category 3' },
  ];

  getBoxes(): Observable<Box[]> {
    return of(this.boxes);
  }

  getCategories(): Observable<string[]> {
    const categories = Array.from(new Set(this.boxes.map((box) => box.category)));
    return of(categories);
  }

  getBoxesByCategory(category: string): Observable<Box[]> {
    const filteredBoxes = this.boxes.filter((box) => box.category === category);
    return of(filteredBoxes);
  }

  getBoxDetails(boxId: number): Observable<Box | undefined> {
    const box = this.boxes.find((b) => b.id === boxId);
    return of(box);
  }
}
