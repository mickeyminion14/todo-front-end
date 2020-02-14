import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";

const MATERIAL = [MatToolbarModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ...MATERIAL],
  exports: [HeaderComponent, ...MATERIAL]
})
export class LayoutModule {}
