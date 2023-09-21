import { Component, OnInit } from '@angular/core';
import { EstatesService } from 'src/app/_services/estates.service';
import { Estate } from 'src/app/models/estate';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent implements OnInit {
  estates: Estate[] = [];

  constructor(private estateService: EstatesService) { }

  ngOnInit(): void {
    this.loadEstates();
  }

  loadEstates() {
    this.estateService.getEsates().subscribe({
      next: estates => {
        this.estates = estates
      }
    });
  }

}
