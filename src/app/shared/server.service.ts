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
    return this.http
      .put(
        `https://recipe-book-project-angular.firebaseio.com/${name}.json`,
        data
      )
      .pipe(
        catchError((error: Response) => {
          console.log(`Can't save data ${name}`, error);
          return throwError(error);
        })
      );
  }

  loadData(name: string) {
    return this.http
      .get(`https://recipe-book-project-angular.firebaseio.com/${name}.json`)
      .pipe(
        map((response: Response) => {
          const data = response.json();
          console.log(data);
          // this.recipeService.setRecipes(recipes);
          return data;
        }),
        catchError((error: Response) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
