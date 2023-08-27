import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { EstatesService } from 'src/app/_services/estates.service';
import { EstateDetail } from 'src/app/models/estate-detail';

@Component({
  selector: 'app-estate-detail',
  standalone: true,
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.css'],
  imports: [CommonModule, GalleryModule]
})
export class EstateDetailComponent implements OnInit {
  estate: EstateDetail | undefined;
  images: GalleryItem[] = [];

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
        // this.getImages()
      }
    });
  }

  // getImages() {
  //   if (!this.estate) return;
  //   for (const photo of this.estate?.photos) {
  //     this.images.push(new ImageItem({src: photo.url, thumb: photo.url}))
  //   }
  // }

}
