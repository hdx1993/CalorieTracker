import { Component, OnInit, Input } from '@angular/core';
import { foodsComponent } from '../foods/foods.component';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class foodComponent implements OnInit {

  @Input() food;
  @Input() pic;

  constructor(private foodsComponent: foodsComponent) { }

  ngOnInit() {
  }

  castDate(date) {
    return new Date(date);
  }

  enterfood() {
    this.foodsComponent.enterfood(this.food);
  }

  cancelfood() {
    this.foodsComponent.cancelfood(this.food);
  }
  upQuantity() {
    this.foodsComponent.upQuantity(this.food);
  }
  downQuantity() {
    this.foodsComponent.downQuantity(this.food);
  }
  showQuantity() {
    this.foodsComponent.showQuantity(this.food);
  }
}
