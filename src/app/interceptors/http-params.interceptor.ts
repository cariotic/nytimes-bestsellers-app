import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { environment as env } from 'src/environments/environment.development';

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            // setHeaders: {
                
            // },
            setParams: {
                'api-key': env.NYT_API_KEY,
            }
        });
        return next.handle(req);
    }
}