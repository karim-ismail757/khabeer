import { Component } from '@angular/core';
import { Account } from 'src/app/interfaces/account';
import { user } from 'src/app/interfaces/user';
import { map } from 'rxjs/operators';
import { UpdateAccountComponent } from '../update-account/update-account.component';
import {  OnInit,ViewChild } from '@angular/core';


import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  account: Account[];
  user:user[];
  limit=10;

  constructor(public accountService:AccountServiceService ,
    private router: Router) {

      console.log('hello')
     }

     ngOnInit() {
      this.getAccounts();
      console.log(this.user)
      this

    }





    userDetails(id: number){
      this.router.navigate(['employee-details', id]);
    }
  
    updateuser(id: number){
      this.router.navigate(['update', id]);
      this.getAccounts();
    }
  
    deleteUser(id: number){
      this.accountService.deleteUser(id).subscribe( data => {
        console.log(data);
       this.user=  this.user.filter(user=>user.id!==id)
      })




    }


  
getAccounts(){
  this.accountService.getAccountList().pipe(map(response => response.slice(0,this.limit))).subscribe(data => {
  return this.user=data;
    console.log(this.user);
    
  });
}
  
  
  }
  
