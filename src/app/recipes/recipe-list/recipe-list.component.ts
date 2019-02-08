import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent {
  recipies: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg"
    ),
    new Recipe(
      "A test 2 recipe",
      "This is a test",
      "https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg"
    )
  ];
  @Output() recipeSelectedEvt = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedEvt.emit(recipe);
  }
}
