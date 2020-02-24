import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http/http.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpParams, HttpHeaders } from "@angular/common/http";
import { BASE_URL } from "src/app/constants/apiEndpoints";
@Injectable()
export class TodosService {
  todos: any;
  constructor(private _httpService: HttpService) {}

  getTodos(): Observable<any> {
    return this._httpService.get(BASE_URL + "/todo/getAll").pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
