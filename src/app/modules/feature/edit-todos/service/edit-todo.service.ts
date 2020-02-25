import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http/http.service";
import { BASE_URL } from "src/app/constants/apiEndpoints";
import { map } from "rxjs/operators";

@Injectable()
export class EditTodoService {
  constructor(private httpService: HttpService) {}

  editTodo(payload) {
    return this.httpService
      .post(BASE_URL + "/todo/edit", payload)
      .pipe(map(resp => resp));
  }
}
