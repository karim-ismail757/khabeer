import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'AccountListComponent', pathMatch: 'full'},
  { path: '', component: AccountListComponent, pathMatch: 'full'},

  { path: 'update/:id', component: UpdateAccountComponent , pathMatch: 'full'},
  { path: 'create', component: CreateUserComponent , pathMatch: 'full'},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
