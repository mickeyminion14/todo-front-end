import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpService } from "src/app/services/http/http.service";
import { ToastService } from "src/app/services/toast/toast.service";
import { ActivatedRoute, Router } from "@angular/router";
import { EditTodoService } from "./service/edit-todo.service";

@Component({
  selector: "app-edit-todos",
  templateUrl: "./edit-todos.component.html",
  styleUrls: ["./edit-todos.component.scss"]
})
export class EditTodosComponent implements OnInit {
  addTodoForm: FormGroup;
  activeId: number;
  constructor(
    private _fb: FormBuilder,
    private editTodoService: EditTodoService,

    private _toastService: ToastService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addTodoForm = this.createAddTodoForm();

    this._activatedRoute.params.subscribe(data => (this.activeId = data.id));

    this.addTodoForm.patchValue({
      id: this.activeId
    });
  }

  ngOnInit() {}

  createAddTodoForm(): FormGroup {
    return this._fb.group({
      id: new FormControl("", [Validators.nullValidator]),
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required])
    });
  }

  editTodo() {
    if (this.addTodoForm.valid) {
      this.addTodoForm.disable();
      const payload = { ...this.addTodoForm.value };
      this.editTodoService.editTodo(payload).subscribe(
        (data: any) => {
          this._toastService.openSnackBar(data.message);
          this.router.navigate(["/feature/todos"]);
          this.addTodoForm.enable();
        },
        err => {
          this._toastService.openSnackBar(err.error.message);
          this.addTodoForm.enable();
        }
      );
    } else {
      this._toastService.openSnackBar(
        "Enter valid details to update the todo !!"
      );
    }
  }
}
