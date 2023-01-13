import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';
import { user } from '../interfaces/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  limit:number=10;
  users:user[]
  url="https://jsonplaceholder.typicode.com/posts"
  getAccountUrl="http://40.127.194.127:777/api/Emergency/GetAllArrivingMethods?first=0&page=0&rows=10"
  constructor(private httpClient: HttpClient) { 
    this.getAccounts();
  }
  

  getAccountList(): Observable<user[]>{
    return this.httpClient.get<user[]>(`${this.url}`);
  }

createUser(account: user): Observable<object>{
  return this.httpClient.post(`${this.url}`, account);
}



updateUser(id: number, user: user): Observable<Object>{
  return this.httpClient.put(`${this.url}/${id}`, user);
}

deleteUser(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.url}/${id}`);
}


getUserById(id: number): Observable<user>{
  return this.httpClient.get<user>(`${this.url}/${id}`);
}




getAccounts(){
  this.getAccountList().pipe(map(response => response.slice(0,this.limit))).subscribe(data => {
  return this.users=data;
    console.log(this.users);
    
  });
}

}



