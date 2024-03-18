// boxes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box } from './box.model';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  private apiUrl = 'http://localhost:8888/SAE_401/SAE401/src/app/apiRest/commande/api.php';

  constructor(private http: HttpClient) {}

  getBoxes(): Observable<Box[]> {
    return this.http.get<Box[]>(this.apiUrl + '/boxes');
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + '/categories');
  }

  getBoxesByCategory(category: string): Observable<Box[]> {
    return this.http.get<Box[]>(this.apiUrl + '/boxes/category/' + category);
  }

  getBoxDetails(boxId: number): Observable<Box | undefined> {
    return this.http.get<Box>(this.apiUrl + '/box/' + boxId);
  }
}
