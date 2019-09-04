import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
   signIn(data) {
        return this.http.post('/api/v1/users/signin', data, httpOptions)
   }
   registerUser(data){
   		return this.http.post('/api/v1/users/signup', data, httpOptions)
   }
   listUsers() {
        return this.http.get('/api/v1/users/users')
   }
   deleteUser(user) {
        return this.http.delete('/api/v1/users/user/'+user._id, httpOptions)
   }
   listProducts() {
     return this.http.get('/api/v1/products/product', httpOptions)
   }
   addCart(data) {
     return this.http.post('/api/v1/products/cart', data, httpOptions)
   }
   getmyCart(data) {
     return this.http.post('/api/v1/products/mycart', data, httpOptions)
   }
   getCartCount(data) {
    return this.http.get('/api/v1/products/mycartcount', {params:data})
   }
   removeCart(data){
    return this.http.delete('/api/v1/products/mycart/'+data._id, httpOptions)
   }
   saveAddress(data){
    return this.http.post('/api/v1/products/address', data, httpOptions)
   }
   getmyAddress(data){
    return this.http.get('/api/v1/products/address', {params:data})
   }
   getAllOrders(){
    return this.http.get('/api/v1/orders/order')
   }
   getmyOrders(data){
    return this.http.get('/api/v1/orders/myorder', {params:data})
   }
   placeOrder(data){
    return this.http.post('/api/v1/orders/placeorder', data, httpOptions)
   }
   updateStatus(data){
    return this.http.put('/api/v1/orders/order', data, httpOptions)
   }
}
