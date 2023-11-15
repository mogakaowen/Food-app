import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!: Food;
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.food = this.foodService.getFoodById(id);
    }
    else {
      this.food = this.foodService.getAllFoods()[0];
    }
  }

}
