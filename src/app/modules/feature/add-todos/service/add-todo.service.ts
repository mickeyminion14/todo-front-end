import { Injectable } from "@angular/core";
import { TodoModel } from "src/app/models/todos.model";
import { HttpService } from "src/app/services/http.service";

@Injectable()
export class AddTodoService {
  constructor(private _http: HttpService) {}

  addTodo(data: TodoModel) {
    console.log(data);

    return this._http.get("/todos");
  }
}
