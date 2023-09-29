import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { State } from '../models/sates';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get<State[]>(this.baseUrl + 'states/GetStates');
  }

  createStates() {}

  getState() {}

  deleteState() {}

  updateState() {}

  restoreState() {}
}
