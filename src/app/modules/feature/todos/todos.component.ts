import { Component, OnInit } from "@angular/core";
import { TodosService } from "./todos.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast/toast.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos: any[];
  todoEmpty = false;
  constructor(
    private _todosService: TodosService,
    private _router: Router,
    private _toastService: ToastService
  ) {
    this._todosService.getTodos().subscribe(data => {
      console.log(data);

      if (data.result.data.length == 0) {
        this.todoEmpty = true;
      } else {
        this.todoEmpty = false;
        this.todos = data.result.data;
      }
    });
  }

  ngOnInit() {
    // this.todos$ = this._todosService.getTodos();
  }

  editTodo(id: string) {
    // console.log(id);

    this._router.navigate(["/feature/edit-todos", id]);
  }

  deletTodo(id: string) {
    const payload = { id: id };

    this._todosService.delteTodo(payload).subscribe(
      (data: any) => {
        this._toastService.openSnackBar(data.message);
        this._todosService.getTodos().subscribe(data => {
          console.log(data);

          if (data.result.data.length == 0) {
            this.todoEmpty = true;
          } else {
            this.todoEmpty = false;
            this.todos = data.result.data;
          }
        });
      },
      err => {
        this._toastService.openSnackBar(err.error.message);
      }
    );
  }
}
