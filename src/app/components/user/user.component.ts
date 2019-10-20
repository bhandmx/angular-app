import { Component } from '@angular/core';
import { User } from '../../models/User';
@Component({
selector: 'app-user',
templateUrl: './user.component.html',
styleUrls:['./user.component.css']

})

export class UserComponent{
    //properties
user: User;

//Methods
constructor(){
    this.user = {
        firstName: 'Minakshi',
        lastName: 'Bhandari',
        email:'minu@gmail.com'


    }


}


}