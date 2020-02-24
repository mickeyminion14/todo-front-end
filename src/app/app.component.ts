import { Component, OnInit } from "@angular/core";
import { LoaderService } from "./services/loader/loader.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isLoading = false;
  title = "todo";
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe(data => {
      setTimeout(() => {
        this.isLoading = data;
      }, 0);
    });
  }
}
