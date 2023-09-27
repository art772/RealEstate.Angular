import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estate } from '../models/estate';
import { EstateDetail } from '../models/estate-detail';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEsates() {
    return this.http.get<Estate[]>(this.baseUrl + 'estates/GetEstates');
  }

  getEstate(id: number) {
    return this.http.get<EstateDetail>(this.baseUrl + 'estates/GetDetails/' + id);
  }

  createEstate(model: any) {
    return this.http.post<EstateDetail>(this.baseUrl + 'estates/CreateEstate', model). pipe(
      map(estate => {
        return estate;
      })
      // map((response: EstateDetail) => {
      //   return response;
      // })
      ,
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 400) {
          // Jeśli status odpowiedzi to 400 (Bad Request), to zakładamy, że są błędy walidacji
          const validationErrors = errorResponse.error;
          if (typeof validationErrors === 'object') {
            // Przekształć obiekt na tablicę stringów
            const errorsArray = Object.values(validationErrors);
            return throwError(() => errorsArray);
          }
        }
        // Jeśli status to coś innego lub błąd nie jest w oczekiwanym formacie, zwróć ogólny komunikat błędu
        return throwError(() => (['Wystąpił błąd podczas rejestracji.']));
      })
    );
  }

  getEstateByCategory(id: number) {
    return this.http.get<Estate[]>(this.baseUrl + 'estates/GetEstatesByCategory/' + id);
  }

  getEstateByGenre(id: number) {
    return this.http.get<Estate[]>(this.baseUrl + 'estates/GetEstatesByGenre/' + id);
  }

  updateEstate() {}

  deleteEstate() {}

}
