import { Injectable } from "@angular/core";
import { TodoModel } from "src/app/models/todos.model";
import { HttpService } from "src/app/services/http/http.service";
import { BASE_URL } from "src/app/constants/apiEndpoints";

@Injectable()
export class AddTodoService {
  constructor(private _http: HttpService) {}

  addTodo(data: TodoModel) {
    return this._http.post(BASE_URL + "/todo/add", data);
  }
}
