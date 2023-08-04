import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'RealEstate.Angular';

  estates: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5186/api/estates/GetEstates').subscribe({
      next: response => this.estates = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completetd')
    });
  }

}
