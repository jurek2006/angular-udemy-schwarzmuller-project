import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  activeView: string = "recipes"; //stores name of active view (i.e. recipes or shoppingList)

  navItemSelected(selectedItemName: string) {
    this.activeView = selectedItemName;
  }
}
