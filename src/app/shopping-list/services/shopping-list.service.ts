import { EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/inredient.model'

export class ShoppingListService{
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.mergeIngredients([ingredient], this.ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());

  }

  addIngredients(ingredients: Ingredient[]){
    this.mergeIngredients(ingredients, this.ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  mergeIngredients(newIngredients: Ingredient[], ingredients: Ingredient[]){
    let mergeIngredients = [...newIngredients, ...ingredients];

    let result = mergeIngredients.reduce((acc: any, current: any) => {
      const existingItem = acc.find(item => item.name === current.name);
      if(existingItem){
        existingItem.amount += current.amount;
      } else {
        acc.push(new Ingredient(current.name, current.amount))
      }
      return acc
    }, [])

    this.ingredients = result;
  }
}
