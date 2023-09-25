import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstatesService } from 'src/app/_services/estates.service';
import { Estate } from 'src/app/models/estate';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent implements OnInit {
  estates: Estate[] = [];
  estatesForSell: Estate[] = [];
  estatesForRent: Estate[] = [];

  constructor(private estateService: EstatesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAllEstates();
    this.loadEstatesForSell();
    this.loadEstatesForRent();
  }

  loadAllEstates() {
    this.estateService.getEsates().subscribe({
      next: estates => {
        this.estates = estates
      }
    });
  }

  loadEstatesForSell() {
    this.estateService.getEstateByCategory(1).subscribe({
      next: estatesForSell => {
        this.estatesForSell = estatesForSell
      }
    });
  }

  loadEstatesForRent() {
    this.estateService.getEstateByCategory(2).subscribe({
      next: estatesForRent => {
        this.estatesForRent = estatesForRent
      }
    });
  }
}
