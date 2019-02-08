import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent {
  recipeActive: Recipe;
  onRecipeSelected(recipe: Recipe) {
    this.recipeActive = recipe;
  }
}
