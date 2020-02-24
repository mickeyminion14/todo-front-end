import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpService } from "src/app/services/http/http.service";
import { ToastService } from "src/app/services/toast/toast.service";
import { ActivatedRoute } from "@angular/router";

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
    private _http: HttpService,

    private _toastService: ToastService,
    private _activatedRoute: ActivatedRoute
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
      const payload = { ...this.addTodoForm.value };
      console.log(payload);
    } else {
      this._toastService.openSnackBar(
        "Enter valid details to edit the todo !!"
      );
    }
  }
}
