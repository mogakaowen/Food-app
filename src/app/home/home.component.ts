import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoods().filter(food => {
          return food.name.toLowerCase().includes(params['searchTerm'].toLowerCase());
        })
      }
      else if (params['tag']) {
        if (params['tag'] === 'All') {
          this.foods = this.foodService.getAllFoods();
        }
        else {
          this.foods = this.foodService.getAllFoods().filter(food => {
            return food.tags?.includes(params['tag']);
          })
        }
      }
      else {
        this.foods = this.foodService.getAllFoods();
      }
    });
  }

}
