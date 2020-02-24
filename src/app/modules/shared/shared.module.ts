import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatSnackBarModule,
  MatSelectModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { ToastComponent } from "./toast/toast.component";
import { DialogComponent } from "./dialog/dialog.component";

const MATERIAL = [MatButtonModule, MatSnackBarModule, MatSelectModule];

@NgModule({
  declarations: [ToastComponent, DialogComponent],
  imports: [CommonModule, ...MATERIAL, HttpClientModule],
  exports: [...MATERIAL, HttpClientModule]
})
export class SharedModule {}
