import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl =  environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'auth/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'auth/register', model).pipe(
      map(user => {
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      }),
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
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
