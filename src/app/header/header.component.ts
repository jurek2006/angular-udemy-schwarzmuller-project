import { Component, Output, EventEmitter } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  onSaveData() {
    this.recipeService.saveToServer();
    this.shoppingListService.saveToServer();
  }

  onLoadData() {
    // this.serverService.loadRecipes().subscribe();
    // this.serverService.loadShoppingList().subscribe();
  }

  // DODAĆ ODCZYTYWANIE
}
