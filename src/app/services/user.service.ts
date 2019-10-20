import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from "rxjs";

@Injectable()
export class UserService {
users: User[];
data: Observable<any>;
  constructor() {
    this.users = [
      {
        firstName: 'Minakshi',
        lastName: 'Bhandari',
        email:'minakshi@gmail.com',
        isActive: true,
        registered: new Date('11/11/1992 08:00:00'),
        hide: true
      },
      {
        firstName: 'SOni',
        lastName: 'Bhandari',
        email:'soni@gmail.com',
        isActive: false,
        registered: new Date('04/11/2000 09:00:00'),
        hide: true
      },
      {
        firstName: 'Sheetal',
        lastName: 'Bhandari',
        email:'sheetal@gmail.com',
        isActive: true,
        registered: new Date('07/12/2011 10:00:00'),
        hide: true
      }
    ];
   }
   
   getUsers(): Observable<User[]> {
     return of(this.users);
   }
  getData(){
    this.data = new Observable(observer => {
    setTimeout(() => {
      observer.next(1);
    },1000);
    setTimeout(() => {
      observer.next(2);
    },2000);

});
return this.data;
  }
   addUser(user:User){
     return this.users.unshift(user);
   }
}
