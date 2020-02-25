import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditTodosRoutingModule } from "./edit-todos-routing.module";
import { EditTodosComponent } from "./edit-todos.component";
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EditTodoService } from "./service/edit-todo.service";
const MATERIAL = [MatInputModule, MatFormFieldModule, MatButtonModule];

@NgModule({
  declarations: [EditTodosComponent],
  imports: [
    CommonModule,
    EditTodosRoutingModule,
    ...MATERIAL,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EditTodoService]
})
export class EditTodosModule {}
