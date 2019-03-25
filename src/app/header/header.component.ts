import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {
  constructor(private dataStoraceService: DataStorageService) {}

  onSaveData() {
    this.dataStoraceService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }
}
