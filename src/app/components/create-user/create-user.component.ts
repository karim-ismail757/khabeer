import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {user }from '../../interfaces/user';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user:user;
  constructor(private accountService: AccountServiceService,
    private router: Router) { }

onInit(){

}

userForm = new FormGroup({
  id: new FormControl(),
  userId: new FormControl(''),
  title: new FormControl(''),
  body: new FormControl('')

});

    saveUser(form:user){
 
      this.accountService.createUser(form).subscribe( data =>{
        console.log(data);
        this.goToUserList();
      },
      error => console.log(error));
    }
  
    goToUserList(){
      this.router.navigate(['/']);
    }
    
    onSubmit(form:FormGroup){
      console.log(this.user);
      this.saveUser(form.value);
    }
}
