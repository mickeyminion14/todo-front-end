import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Params } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  get(url: string) {
    // const params = para
    const headers = new HttpHeaders();
    headers.append("lol", "lol");
    return this._http.get(url);
  }

  post(url: string, body: any) {
    const params = new HttpParams();
    return this._http.post(url, body, { params: params });
  }

  delete(url: string, body: any) {
    return this._http.delete(url, body);
  }
}
