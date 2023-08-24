import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstatesService } from 'src/app/_services/estates.service';
import { EstateDetail } from 'src/app/models/estate-detail';

@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.css']
})
export class EstateDetailComponent implements OnInit {
  estate: EstateDetail | undefined;

  constructor(private estateService: EstatesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEstate();
  }

  loadEstate() {
    var id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    var estateId = parseInt(id);
    this.estateService.getEstate(estateId).subscribe({
      next: estate => {
        this.estate = estate
        console.log(estate);
      }
    });
  }

}
