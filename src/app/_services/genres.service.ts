import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Genre } from '../models/genres';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get<Genre[]>(this.baseUrl + 'genres/GetGenres');
  }
}
