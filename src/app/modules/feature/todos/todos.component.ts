import { Component, OnInit } from "@angular/core";
import { TodosService } from "./todos.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos$: Observable<any>;
  constructor(private _todosService: TodosService) {
    // this.todos$.subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.todos$ = this._todosService.getTodos();
  }
}
