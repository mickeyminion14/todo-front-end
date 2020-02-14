import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpService } from "src/app/services/http.service";
import { TodoModel } from "src/app/models/todos.model";
import { AddTodoService } from "./service/add-todo.service";
import { map } from "rxjs/operators";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-add-todos",
  templateUrl: "./add-todos.component.html",
  styleUrls: ["./add-todos.component.scss"]
})
export class AddTodosComponent implements OnInit {
  addTodoForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _http: HttpService,
    private _addTodoService: AddTodoService,
    private _toastService: ToastService
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
    const payload: TodoModel = { ...this.addTodoForm.value, finished: false };

    this._addTodoService
      .addTodo(payload)
      .pipe(
        map(resp => {
          return resp;
        })
      )
      .subscribe(
        data => console.log(data),
        err => this._toastService.openSnackBar("Something went wrong !")
      );
  }
}
