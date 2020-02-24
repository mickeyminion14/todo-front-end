import { Injectable } from "@angular/core";
import { LoaderService } from "../loader/loader.service";
import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay, tap } from "rxjs/operators";

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
      tap(
        data => {
          if (data instanceof HttpResponse) {
            this.loaderService.hide();
          }
        },
        err => {
          this.loaderService.hide();
        }
      )
    );
  }
}
