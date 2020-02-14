import { Injectable } from "@angular/core";
import { LoaderService } from "./loader.service";
import { HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorService {
  constructor(public loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      delay(2000),
      finalize(() => this.loaderService.hide())
    );
  }
}
