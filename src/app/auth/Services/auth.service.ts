import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LoginInterface } from '../interfaces/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router:Router
  ) { }

  readonly baseUrl:string = 'http://localhost:3000';

  private user?: UserInterface;

  getCurrentUser():UserInterface|undefined{
    if(!this.user) return undefined
    return structuredClone(this.user)
  }

  signUp(user:UserInterface):Observable<UserInterface>{
    return this.httpClient.post<UserInterface>(`${this.baseUrl}/users/create-user`,user)
  };

  logIn(credentials:LoginInterface):Observable<UserInterface>{
    return this.httpClient.post<UserInterface>(`${this.baseUrl}/users/find-one-user`,credentials)
    .pipe(
      tap( userResponse => this.user=userResponse),
      tap( 
        userResponse => {
          localStorage.setItem('session-user-id',userResponse._id!)
          localStorage.setItem('session-user-name',userResponse.name)
          localStorage.setItem('session-user-username',userResponse.username)
          
        }
      ),
    )
  };

  checkAuth():Observable<boolean>{
    console.log('entro al checkaut')
    if(!localStorage.getItem('session-user-username')) return of( false )
    const username = localStorage.getItem('session-user-username')

    console.log('este es el username',username)

    return this.httpClient.get<UserInterface>(`${this.baseUrl}/users/${username}`)
    .pipe(
      tap(userResponse => this.user=userResponse),
      map(userResponse => !!userResponse),
      catchError( err => of(false))
    )
  }

  logOut(){
    console.log('entro al logout de authservice')
    this.user=undefined;
    localStorage.clear();
    this.router.navigate(['/log-in'])
  }
}
