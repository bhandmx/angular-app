import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from "../../services/user.service";
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email:''
  };
  users: User[];

 


  showExtended: boolean = false;
  loaded: boolean = false;
  addLabel: boolean = true;
  showUserForm: boolean = false;
  data:any;
  @ViewChild('userForm') form: any;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    
    this.userservice.getData().subscribe(data => {
      console.log(data);
    })

    this.userservice.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({value, valid}: {value:User, valid:boolean}) {
  if(!valid){
    console.log('Form is invalid');
  
  }
else{
  value.isActive = true;
  value.registered = new Date();
  value.hide = true;
  this.userservice.addUser(value);
  this.form.reset();
}
  }


}