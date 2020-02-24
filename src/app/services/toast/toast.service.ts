// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
// tslint:disable-next-line: quotemark
import { ToastComponent } from "../../modules/shared/toast/toast.component";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  // tslint:disable-next-line: variable-name
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(data) {
    this._snackBar.openFromComponent(ToastComponent, {
      duration: 3000,
      // tslint:disable-next-line: object-literal-shorthand
      data: data
    });
  }
}
