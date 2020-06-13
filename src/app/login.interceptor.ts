import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myToken = localStorage.getItem('token');
        if(myToken) {
            const p = new HttpParams().set('access_token', myToken);

            let cloneReq = req.clone({
                params : p
            });

            return next.handle(cloneReq);
        }
        else {
            return next.handle(req);
        }
    }

    
}

export const loginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : LoginInterceptor,
    multi : true
}