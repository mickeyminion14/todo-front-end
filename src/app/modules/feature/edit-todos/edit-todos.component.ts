import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpService } from "src/app/services/http.service";
import { AddTodoService } from "../add-todos/service/add-todo.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-edit-todos",
  templateUrl: "./edit-todos.component.html",
  styleUrls: ["./edit-todos.component.scss"]
})
export class EditTodosComponent implements OnInit {
  addTodoForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _http: HttpService,

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
}
