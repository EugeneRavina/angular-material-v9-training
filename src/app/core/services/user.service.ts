import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  // userById(id: number) {
  //   return this.dataStore.users.find(x => x.id == id);
  // }


  getuser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
