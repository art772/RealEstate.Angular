import { Component, Input, OnInit } from '@angular/core';
import { Estate } from 'src/app/models/estate';

@Component({
  selector: 'app-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.css']
})
export class EstateCardComponent implements OnInit {
  @Input() estate: Estate | undefined;

  constructor() {}

  ngOnInit(): void {
  }

}
