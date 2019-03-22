import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  saveData() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(
      "https://recipe-book-project-angular.firebaseio.com/recipes.json",
      recipes
    );
  }
}
