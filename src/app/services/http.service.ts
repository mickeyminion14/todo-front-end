import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Params } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  get(url: string, headers?: Headers, params?: Params) {
    return this._http.get(url);
  }

  post(url: string, body: any, headers?: Headers) {
    return this._http.post(url, body);
  }
}
