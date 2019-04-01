import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    return this.authService
      .getToken()
      .then(token => {
        return this.http
          .put(
            `https://recipe-book-project-angular.firebaseio.com/recipes.json?auth=${token}`,
            this.recipeService.getRecipes()
          )
          .subscribe();
      })
      .catch(err => console.log(err));
  }

  getRecipes() {
    return this.authService
      .getToken()
      .then(token => {
        return this.http
          .get(
            `https://recipe-book-project-angular.firebaseio.com/recipes.json?auth=${token}`
          )
          .pipe(
            map((response: Response) => {
              const recipes: Recipe[] = response.json();
              for (const recipe of recipes) {
                if (!recipe.ingredients) {
                  recipe.ingredients = [];
                }
              }
              return recipes;
            })
          )
          .subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
          });
      })
      .catch(err => console.log(err));
  }
}
