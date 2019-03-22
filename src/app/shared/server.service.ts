import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(
      "https://recipe-book-project-angular.firebaseio.com/recipes.json",
      recipes
    );
  }

  saveSchoppingList() {
    const shoppingList = this.shoppingListService.getIngredients();
    return this.http.put(
      "https://recipe-book-project-angular.firebaseio.com/shopping-list.json",
      shoppingList
    );
  }
}
