import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private API_URL = environment.api_url;
  constructor(private http:HttpClient) { }
   signIn(data:any) {
        return this.http.post(this.API_URL + '/users/signin', data, httpOptions)
   }
   registerUser(data:any){
   		return this.http.post(this.API_URL + '/users/signup', data, httpOptions)
   }
   listUsers() {
        return this.http.get(this.API_URL + '/users/users')
   }
   deleteUser(user:any) {
        return this.http.delete(this.API_URL + '/users/user/'+user._id, httpOptions)
   }
   listProducts() {
     return this.http.get(this.API_URL + '/products/product', httpOptions)
   }
   addCart(data:any) {
     return this.http.post(this.API_URL + '/products/cart', data, httpOptions)
   }
   getmyCart(data:any) {
     return this.http.post(this.API_URL + '/products/mycart', data, httpOptions)
   }
   getCartCount(data:any) {
    return this.http.get(this.API_URL + '/products/mycartcount', {params:data})
   }
   removeCart(data:any){
    return this.http.delete(this.API_URL + '/products/mycart/'+data._id, httpOptions)
   }
   saveAddress(data:any){
    return this.http.post(this.API_URL + '/products/address', data, httpOptions)
   }
   getmyAddress(data:any){
    return this.http.get(this.API_URL + '/products/address', {params:data})
   }
   getAllOrders(){
    return this.http.get(this.API_URL + '/orders/order')
   }
   getmyOrders(data:any){
    return this.http.get(this.API_URL + '/orders/myorder', {params:data})
   }
   placeOrder(data:any){
    return this.http.post(this.API_URL + '/orders/placeorder', data, httpOptions)
   }
   updateStatus(data:any){
    return this.http.put(this.API_URL + '/orders/order', data, httpOptions)
   }
}
