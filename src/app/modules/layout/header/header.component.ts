import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router, private _toastService: ToastService) {}

  ngOnInit() {}

  openAddTodo() {
    this._router.navigate(["/feature/add-todos"]);
  }

  openTodo() {
    this._router.navigate(["/feature/todos"]);
  }

  openForm() {
    this._router.navigate(["/feature/multiple-form"]);
  }

  showToast() {
    this._toastService.openSnackBar("sarthak agrawal");
  }
}
