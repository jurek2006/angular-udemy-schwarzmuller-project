import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    if (nameInput.value.length > 0 && +amountInput.value > 0) {
      this.ingredientAdded.emit(
        new Ingredient(nameInput.value, +amountInput.value)
      );
    }
  }
}
