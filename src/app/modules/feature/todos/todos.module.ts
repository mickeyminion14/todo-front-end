import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodosRoutingModule } from "./todos-routing.module";
import { TodosComponent } from "./todos.component";

import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";
import { TodosService } from "./todos.service";
import { Subject, Observable } from "rxjs";
const MATERIAL = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule
];
@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, ...MATERIAL],
  providers: [TodosService]
})
export class TodosModule {}
