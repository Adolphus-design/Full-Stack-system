import { environment } from './../environments/environment';
//import { RequestOptions } from 'node:https';
import { InMemoryDataService } from './in-memory-data.service';

import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { stringify } from '@angular/compiler/src/util';






@Injectable({
  providedIn: 'root'
})
export class ServiceService {




  constructor( 
    private http: HttpClient, 
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`Service: ${message}`);
}

  //private url = "api/users";
  private url = "http://localhost:7000/user"
  //private url = "assets/proxy.conf.json"

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
    //Http Options for adding new information
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


  getUsers(): Observable<User[]> {
  //const users = of(USERS);

   return this.http.get<any[]>(this.url, {responseType: "json"})
   .pipe(tap((_)=> console.log("fetched users")) ,catchError(this.handleError<any[]>('getUser', []))
  );
    //this.messageService.add('HeroService: fetched heroes');
   // return users
  }


  /** POST: add a new hero to the server */
addUser(user: User): Observable<User> {
  return this.http.post<User>(this.url, user).pipe(
    tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
    catchError(this.handleError<User>('addUser'))
  );
}

/*
/** GET hero by id. Will 404 if id not found */
getUser(id: number): Observable<User> {
  const url = `${this.url}/${id}`;
  return this.http.get<User>(url).pipe(
    tap(_ => this.log(`fetched user id=${id}`)),
    catchError(this.handleError<User>(`getUser id=${id}`))
  );
}

/** DELETE: delete the hero from the server */
deleteUser(id: number): Observable<User> {
  const url = `${this.url}/${id}`;

  return this.http.delete<User>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted user id=${id}`)),
    catchError(this.handleError<User>('deleteUser'))
  );
}


}
