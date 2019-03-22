import { Component, Output, EventEmitter } from "@angular/core";
import { ServerService } from "../shared/server.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {
  constructor(private serverService: ServerService) {}

  onSaveData() {
    this.serverService
      .saveRecipes()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );

    this.serverService
      .saveSchoppingList()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
