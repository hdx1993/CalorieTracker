import { Component } from '@angular/core';
import { food } from './food';
import { foodService } from './food.service';

@Component({
  selector: 'my-foods',
  templateUrl: './foods.component.html',
  styleUrls:['./foods.component.css']
})
export class foodsComponent {
  cash = 2000;
  sodium = 50;
  carbo = 50;
  protein = 50;
  foods: food[];

  constructor(private foodService: foodService) { }

  ngOnInit() {
    this.foodService.getAllitem()
        .subscribe(data => this.foods = data);
  }

  totalCost_calories() {
    let sum = 0;
    if (this.foods) {
      for (let food of this.foods) {
        // if (food.isRacing) 
          sum = sum + this.showQuantity(food) * food.nf_calories;
        }
      }
    return sum;
  }

  caloLeft() {
    if (this.cash - this.totalCost_calories() > 0) {
      return Math.round((this.cash - this.totalCost_calories()) * 100 / 100);
    } else {
      return "-";
    }
    
  }

  totalCost_sodium() {
    let sum = 0;
    if (this.foods) {
      for (let food of this.foods) {
        // if (food.isRacing) 
          sum = sum + this.showQuantity(food) * food.nf_sodium;
        }
      }
    return sum;
  }

  sodiumLeft() {
    if (this.sodium - this.totalCost_sodium() > 0) {
      return Math.round((this.sodium - this.totalCost_sodium()) * 100 / 100);
    } else {
      return "-";
    }
    
  }

  totalCost_carbo() {
    let sum = 0;
    if (this.foods) {
      for (let food of this.foods) {
        // if (food.isRacing) 
          sum = sum + this.showQuantity(food) * food.nf_total_carbohydrate;
        }
      }
    return sum;
  }

  carboLeft() {
    if (this.carbo - this.totalCost_carbo() > 0) {
      return  Math.round((this.carbo - this.totalCost_carbo()) * 100 / 100);
    } else {
      return "-";
    }
    
  }
  totalCost_protein() {
    let sum = 0;
    if (this.foods) {
      for (let food of this.foods) {
        // if (food.isRacing) 
          sum = sum + this.showQuantity(food) * food.nf_protein;
        }
      }
    return sum;
  }

  proteinLeft() {
    if (this.protein - this.totalCost_protein() > 0) {
      return Math.round((this.protein - this.totalCost_protein()) * 100 / 100);
    } else {
      return "-";
    }
    
  }

  enterfood(food) {
    if (this.caloLeft() > food.entryFee) {
      food.isRacing = true;
    } else {
      alert("You cannot eat anymore");
    }
  }

  showQuantity(food) {
    return food.quantity;
  }


  upQuantity(food) {
    food.quantity++;
  }
  downQuantity(food) {
    if (food.quantity > 0) {
      food.quantity--;
    }
  }

  cancelfood(food) {
    food.isRacing = false;
  }

}
