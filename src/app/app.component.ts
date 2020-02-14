import { Component } from "@angular/core";
import { LoaderService } from "./services/loader.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private loaderService: LoaderService) {}
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  title = "todo";
}
