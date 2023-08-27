import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estate } from '../models/estate';
import { EstateDetail } from '../models/estate-detail';
import { map } from 'rxjs';

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

  // creteEstate(model: EstateDetail) {
  //   return this.http.post<EstateDetail>(this.baseUrl + 'estates​/CreateEstate', model). pipe(
  //     map((response: EstateDetail) => {
  //       console.log(response);
  //       return response;
  //     })
  //   );
  // }

}
