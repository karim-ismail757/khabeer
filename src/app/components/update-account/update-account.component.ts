import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {user }from '../../interfaces/user';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent {
user :user=new user();
id:number;
userId:number;
title:string;
body:string;
fetchedUser:user[];
limit:number=10;
fetchedData:user[];
constructor(private accountService: AccountServiceService,
  private route: ActivatedRoute,
  private router: Router) { }



  userForm = new FormGroup({
    id: new FormControl(),
    userId: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  
  });


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.accountService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.id=data.id;
      this.userId=data.userId;
      this.title=data.title;
      this.body=data.body;
      console.log(data);
    }, error => console.log(error));
  }

  onSubmit(data:FormGroup){
    this.accountService.updateUser(this.id,data.value).subscribe( data =>{
      this.goToEmployeeList();
      console.log(data);


    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/']);
  }

  



}
