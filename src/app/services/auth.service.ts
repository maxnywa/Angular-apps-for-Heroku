import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import { BehaviorSubject,Observable } from "rxjs/index";
import { of } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth_url:string = environment.auth_url;
  private _token: string;

  private editIsAuth: BehaviorSubject<string> = new BehaviorSubject<string>(`${ this.isAuth ? 'true' : '' }`);
  public editIsAuthEvent = this.editIsAuth.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  public get isAuth() {
    return this._token || localStorage.getItem('token');
  }

  private set token(token) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  public emitEditEvent(status:string){
    this.editIsAuth.next(status);
  }

  login(email: string, password: string):Observable<boolean> {
    return this.http.post(`${this.auth_url}/login`,{ email, password }, { responseType:"text"}).pipe(
      map((res:string):boolean =>{
        this.token = res;
        return true
    })
    );
  }

  signUp(email: string, name: string, password: string){
    return this.http.post(`${this.auth_url}/signup`,{ email,name, password }, { responseType:"text"}).pipe(
      map((res:string):boolean =>{
        this.token = res;
        return true
      })
    );
  }

  logout():Observable<boolean>{
    this.token = '';
    localStorage.setItem('token','');
    this.emitEditEvent('');
    return of(true);
  }

}

