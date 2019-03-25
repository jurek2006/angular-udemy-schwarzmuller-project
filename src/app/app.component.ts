import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}
  ngOnInit() {
    // loading recipes & shopping list on app startup
    this.recipeService.loadFromServer();
    this.shoppingListService.loadFromServer();
  }
}
