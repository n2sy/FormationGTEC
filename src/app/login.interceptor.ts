import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myToken = localStorage.getItem('token');
        console.log('Req : ' + req.params.keys());

        if(myToken) {
            let p = new HttpParams();
            let k = req.params.keys();
            for(let i in req.params.keys()) {
                p = p.set(k[i], req.params.get(k[i]));
            }

            //const p = new HttpParams().set('access_token', myToken);
            p = p.set('access_token', myToken);

            let cloneReq = req.clone({
                params : p
            });

            console.log('cloneReq: ' + cloneReq.params.keys());


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