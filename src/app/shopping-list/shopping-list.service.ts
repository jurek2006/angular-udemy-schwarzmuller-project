import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Jabłka', 10),
    new Ingredient('Pomidory', 3)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
