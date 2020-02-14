import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddTodosRoutingModule } from "./add-todos-routing.module";
import { AddTodosComponent } from "./add-todos.component";
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddTodoService } from "./service/add-todo.service";

const MATERIAL = [MatInputModule, MatFormFieldModule, MatButtonModule];

@NgModule({
  declarations: [AddTodosComponent],
  imports: [
    CommonModule,
    AddTodosRoutingModule,
    ...MATERIAL,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AddTodoService]
})
export class AddTodosModule {}
