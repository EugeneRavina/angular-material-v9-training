import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getuser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
