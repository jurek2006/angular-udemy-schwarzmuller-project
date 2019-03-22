import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
// import { RecipeService } from "../recipes/recipe.service";
// import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(
    private http: Http // private recipeService: RecipeService, // private shoppingListService: ShoppingListService
  ) {}

  saveData(name: string, data: any) {
    return this.http.put(
      `https://recipe-book-project-angular.firebaseio.com/${name}.json`,
      data
    );
  }

  // loadRecipes() {
  //   return this.http
  //     .get("https://recipe-book-project-angular.firebaseio.com/recipes.json")
  //     .pipe(
  //       map((response: Response) => {
  //         const recipes = response.json();
  //         console.log(recipes);
  //         this.recipeService.setRecipes(recipes);
  //         return recipes;
  //       }),
  //       catchError((error: Response) => {
  //         console.log(error);
  //         return throwError(error);
  //       })
  //     );
  // }

  // loadShoppingList() {
  //   return this.http
  //     .get(
  //       "https://recipe-book-project-angular.firebaseio.com/shopping-list.json"
  //     )
  //     .pipe(
  //       map((response: Response) => {
  //         const shoppingList = response.json();
  //         console.log(shoppingList);
  //         this.shoppingListService.addIngredients(shoppingList);
  //         return shoppingList;
  //       }),
  //       catchError((error: Response) => {
  //         console.log(error);
  //         return throwError(error);
  //       })
  //     );
  // }
}
