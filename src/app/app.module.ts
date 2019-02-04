import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./shopping/shopping-list-edit/shopping-list-edit.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { RecipesComponent } from "./recipes/recipes.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ShoppingComponent,
    RecipesComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
