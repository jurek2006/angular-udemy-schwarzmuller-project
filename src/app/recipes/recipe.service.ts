import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Spaghetti',
      'Bardzo smaczne spaghetti',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/spaghetti_bolognese_01.jpg',
      [new Ingredient('Makaron', 1), new Ingredient('Pomidor', 5)]
    ),
    new Recipe(
      1,
      'Tortilla hiszpańska',
      'Prosto z Hiszpanii',
      'https://www.mojegotowanie.pl/media/cache/default_medium/uploads/media/default/0001/72/94c07bd4713afb2ee6c5696ed48b9505c91fc3cb.jpeg',
      [new Ingredient('Ziemniak', 3), new Ingredient('Cebula', 5)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return {
      ...this.recipes.find((recipe: Recipe) => {
        return recipe.id === id;
      })
    };
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
