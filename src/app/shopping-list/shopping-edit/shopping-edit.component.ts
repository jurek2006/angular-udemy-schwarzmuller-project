import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('form') shoppingForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  onSubmit() {
    const { name, number } = this.shoppingForm.value;
    this.shoppingListService.addIngredient(new Ingredient(name, number));
  }
}
