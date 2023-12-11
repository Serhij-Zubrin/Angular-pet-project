import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/inredient.model'
import { ShoppingListService } from './services/shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass'],
})
export class ShoppingListComponent implements OnInit  {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    )
  }
}
