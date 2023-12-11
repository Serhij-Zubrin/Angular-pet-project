import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.sass']
})
export class RecipeIngredientsComponent {
  @Input()  ingredient:string;
}
