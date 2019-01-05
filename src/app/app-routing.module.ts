import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {MarketComponent} from './market/market.component';
const routes: Routes = [
  { path: 'login', component: LoginRegisterComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'market', component: MarketComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
