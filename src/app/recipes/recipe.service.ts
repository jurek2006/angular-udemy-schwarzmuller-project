import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      "Spaghetti",
      "Bardzo smaczne spaghetti",
      "https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/spaghetti_bolognese_01.jpg",
      [new Ingredient("Makaron", 1), new Ingredient("Pomidor", 5)]
    ),
    new Recipe(
      2,
      "Tortilla hiszpańska",
      "Prosto z Hiszpanii",
      "https://www.mojegotowanie.pl/media/cache/default_medium/uploads/media/default/0001/72/94c07bd4713afb2ee6c5696ed48b9505c91fc3cb.jpeg",
      [new Ingredient("Ziemniak", 3), new Ingredient("Cebula", 5)]
    )
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return {
      ...this.recipes.find((recipe: Recipe) => {
        return recipe.id === id;
      })
    };
  }

  addUpdateRecipe(
    index: number,
    newRecipeData: {
      name: string;
      description: string;
      imagePath: string;
      ingredients: Ingredient[];
    }
  ) {
    const newRecipe = new Recipe(
      // if it's new recipe index is undefined and id based on length is provided (it's temporary and can cause bug)
      index || this.recipes.length + 1,
      newRecipeData.name,
      newRecipeData.description,
      newRecipeData.imagePath,
      newRecipeData.ingredients
    );
    if (index) {
      // index given - updating existing recipe with newRecipe
      this.recipes = this.recipes.map(recipe => {
        if (recipe.id === index) {
          return newRecipe;
        } else {
          return recipe;
        }
      });
    } else {
      // index not given - saving new recipe
      this.recipes = [...this.recipes, newRecipe];
    }
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe: Recipe) => recipe.id !== id);
    this.recipesChanged.next([...this.recipes]);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
