import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {
  constructor(
    private dataStoraceService: DataStorageService,
    private authService: AuthService
  ) {}

  onSaveData() {
    this.dataStoraceService.storeRecipes();
  }

  onFetchData() {
    this.dataStoraceService.getRecipes();
  }
}
