import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styles: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Jabłka", 10),
    new Ingredient("Pomidory", 3)
  ];

  constructor() {}

  ngOnInit() {}

  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
