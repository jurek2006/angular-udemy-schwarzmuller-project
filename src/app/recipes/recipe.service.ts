import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Bardzo smaczne spaghetti',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/spaghetti_bolognese_01.jpg',
      [new Ingredient('Makaron', 1), new Ingredient('Pomidor', 5)]
    ),
    new Recipe(
      'Tortilla hiszpańska',
      'Prosto z Hiszpanii',
      'https://www.mojegotowanie.pl/media/cache/default_medium/uploads/media/default/0001/72/94c07bd4713afb2ee6c5696ed48b9505c91fc3cb.jpeg',
      [new Ingredient('Ziemniak', 3), new Ingredient('Cebula', 5)]
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
