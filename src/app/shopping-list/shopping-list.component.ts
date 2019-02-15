import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Jabłka', 10),
    new Ingredient('Pomidory', 3)
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
