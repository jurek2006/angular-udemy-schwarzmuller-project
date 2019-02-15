import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Jabłka', 10),
    new Ingredient('Pomidor', 3)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      const foundIngredient = this.ingredients.find(
        ing => ingredient.name === ing.name
      );
      if (foundIngredient) {
        this.ingredients = [
          ...this.ingredients.filter(ing => ing !== foundIngredient),
          new Ingredient(
            foundIngredient.name,
            foundIngredient.amount + ingredient.amount
          )
        ];
      } else {
        this.ingredients = [...this.ingredients, ingredient];
      }
    }

    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
