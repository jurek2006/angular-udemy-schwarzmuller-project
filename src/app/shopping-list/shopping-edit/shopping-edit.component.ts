import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  addIngredient() {
    if (
      this.nameInput.nativeElement.value.length > 0 &&
      +this.amountInput.nativeElement.value > 0
    ) {
      this.ingredientAdded.emit(
        new Ingredient(
          this.nameInput.nativeElement.value,
          +this.amountInput.nativeElement.value
        )
      );
    }
  }
}
