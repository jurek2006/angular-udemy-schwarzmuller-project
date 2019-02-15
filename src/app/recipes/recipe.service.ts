import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg'
    ),
    new Recipe(
      'A test 2 recipe',
      'This is a test',
      'https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg'
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
