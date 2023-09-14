import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/_services/categories.service';
import { EstatesService } from 'src/app/_services/estates.service';
import { GenresService } from 'src/app/_services/genres.service';
import { StatesService } from 'src/app/_services/states.service';
import { Category } from 'src/app/models/categories';
import { Genre } from 'src/app/models/genres';
import { State } from 'src/app/models/sates';

@Component({
  selector: 'app-create-estate',
  templateUrl: './create-estate.component.html',
  styleUrls: ['./create-estate.component.css']
})
export class CreateEstateComponent implements OnInit {
  createForm: FormGroup = new FormGroup({});
  categories: Category[] = [];
  genres: Genre[] = [];
  states: State[] = [];
  validationErrors: string[] | undefined;

  constructor(private estateService: EstatesService, private categoryService: CategoriesService, private genreService: GenresService, private stateService: StatesService, private formBuilder: FormBuilder, private router: Router) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
    });

    this.stateService.getStates().subscribe(states => {
      this.states = states;
    })
  }

  initializeForm() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      flatNumber: [''],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      estateArea: ['', Validators.required],
      yearOfConstruction: ['', Validators.required],
      genreId: ['', Validators.required],
      categoryId: ['', Validators.required],
      stateId: ['', Validators.required],
      marketType: ['', Validators.required],
      finishState: ['', Validators.required],
      floor: [''],
      numberOfRooms: ['', Validators.required]
    })
  }

  createEstate() {
    this.estateService.createEstate(this.createForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/");
      },
      error: (error) => {
        this.validationErrors = error
      }
    })
  }

}
