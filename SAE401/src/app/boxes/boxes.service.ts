import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Box } from './box.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  private apiUrl = 'http://localhost:8888/SAE_401/SAE401/src/app/apiRest/commande/api.php';

  constructor(private http: HttpClient) {}

  getBoxes(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(data => console.log('Boxes data:', data)),
      catchError(error => {
        console.error('Error fetching boxes:', error);
        return of([]);
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getBoxesByCategory(category: string): Observable<Box[]> {
    return this.http.get<Box[]>(`${this.apiUrl}/boxes?category=${category}`);
  }

  getBoxDetails(boxId: number): Observable<Box | undefined> {
    return this.http.get<Box>(`${this.apiUrl}/boxes/${boxId}`);
  }
}
