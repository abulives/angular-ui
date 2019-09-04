import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { MycartComponent } from './mycart/mycart.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AddressComponent } from './address/address.component';
const routes: Routes = [	
	{path: '', component: ProductComponent},
	{path: 'signin', component: SigninComponent},
	{path: 'registration', component: RegistrationComponent},
	{path: 'home', component: HomeComponent},
	{path: 'product', component: ProductComponent},
	{path: 'mycart', component: MycartComponent},	
	{path: 'placeorder', component: PlaceorderComponent},	
	{path: 'address', component: AddressComponent}	
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
