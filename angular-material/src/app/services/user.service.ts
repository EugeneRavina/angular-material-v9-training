import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetUsers(id:number){
      return  this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(catchError(this.handleError)); 
  }

  UserImage(id: number): string {
 
    return `https://randomuser.me/api/portraits/women/${id}.jpg`
 }
  handleError(err: HttpErrorResponse) {
    console.log(err)
    return throwError(err)
  }
}
