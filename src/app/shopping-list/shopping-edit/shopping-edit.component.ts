import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent
  implements OnInit, OnDestroy, AfterContentInit {
  constructor(private shoppingListService: ShoppingListService) {}
  @ViewChild('f') editForm: NgForm;
  @ViewChild('name') nameInput: ElementRef;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.editForm.setValue({ ...this.editedItem });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterContentInit() {
    this.nameInput.nativeElement.focus();
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.editForm.value.name,
      this.editForm.value.amount
    );
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.editForm.reset();
    this.nameInput.nativeElement.focus();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
