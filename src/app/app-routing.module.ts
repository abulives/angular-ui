import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [	
	{path: '', component: IndexComponent},
	{path: 'signin', component: SigninComponent},
	{path: 'registration', component: RegistrationComponent},
	{path: 'home', component: HomeComponent}	
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
