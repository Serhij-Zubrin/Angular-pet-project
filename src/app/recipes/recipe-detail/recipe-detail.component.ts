import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
@Input() recipe:Recipe

constructor(private recipeService: RecipeService){}

onAddToShoppiongList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}
}
