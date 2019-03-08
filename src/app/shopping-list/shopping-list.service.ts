import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Jabłka", 10),
    new Ingredient("Pomidor", 3)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(index) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.ingredientsChanged.next([...this.ingredients]);
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

    this.ingredientsChanged.next([...this.ingredients]);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
