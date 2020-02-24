import { Component, OnInit } from "@angular/core";
import { TodosService } from "./todos.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos: any[];
  todoEmpty = false;
  constructor(private _todosService: TodosService, private _router: Router) {
    // this.todos$.subscribe(data => console.log(data));
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
}
