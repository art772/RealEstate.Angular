import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstatesService } from 'src/app/_services/estates.service';
import { Estate } from 'src/app/models/estate';

@Component({
  selector: 'app-estate-genre',
  templateUrl: './estate-genre.component.html',
  styleUrls: ['./estate-genre.component.css']
})
export class EstateGenreComponent implements OnInit {
  estates: Estate[] = [];

  constructor(private estateService: EstatesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadEstates();
  }

  loadEstates() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      if (!id) return;
      var categoryId = parseInt(id);
      this.estateService.getEstateByGenre(categoryId).subscribe({
        next: estates => {
          this.estates = estates
        }
      });
    });
  }

}
