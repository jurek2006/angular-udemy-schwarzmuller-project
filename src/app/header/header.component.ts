import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  navigationLinks: { name: string; label: string }[] = [
    { name: "recipes", label: "Recipies" },
    { name: "shoppingList", label: "Shopping List" }
  ];
  @Input() activeItemSelected: string;

  @Output() navItemSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick(navElementClicked) {
    this.navItemSelected.emit(navElementClicked);
  }
}
