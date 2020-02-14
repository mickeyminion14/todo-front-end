import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule, MatSnackBarModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { ToastComponent } from "./toast/toast.component";

const MATERIAL = [MatButtonModule, MatSnackBarModule];

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, ...MATERIAL, HttpClientModule],
  exports: [...MATERIAL, HttpClientModule]
})
export class SharedModule {}
