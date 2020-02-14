import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable()
export class TodosService {
  todos: any;
  constructor(private _httpService: HttpService) {}

  getTodos(): Observable<any> {
    return this._httpService.get("/todos").pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
