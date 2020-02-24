import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpService } from "src/app/services/http/http.service";
import { TodoModel } from "src/app/models/todos.model";
import { AddTodoService } from "./service/add-todo.service";
import { map } from "rxjs/operators";
import { ToastService } from "src/app/services/toast/toast.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-todos",
  templateUrl: "./add-todos.component.html",
  styleUrls: ["./add-todos.component.scss"]
})
export class AddTodosComponent implements OnInit {
  addTodoForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _addTodoService: AddTodoService,
    private _toastService: ToastService,
    private router: Router
  ) {
    this.addTodoForm = this.createAddTodoForm();
  }

  ngOnInit() {}

  createAddTodoForm(): FormGroup {
    return this._fb.group({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required])
    });
  }

  addTodo() {
    if (this.addTodoForm.valid) {
      const payload: TodoModel = { ...this.addTodoForm.value };
      this.addTodoForm.disable();
      this._addTodoService
        .addTodo(payload)
        .pipe(
          map(resp => {
            return resp;
          })
        )
        .subscribe(
          (data: any) => {
            this._toastService.openSnackBar(data.message);
            this.router.navigate(["/feature/todos"]);
            this.addTodoForm.enable();
          },
          (err: any) => {
            console.log(err);

            this._toastService.openSnackBar(err.error.message);
            this.addTodoForm.enable();
            this.addTodoForm.reset();
          }
        );
    } else {
      this._toastService.openSnackBar("Please Enter Valid Todo Details !!");
    }
  }
}
