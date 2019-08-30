import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  constructor(private router: Router,private myservice: MyserviceService, private appcomponent: AppComponent) { }
  carts = [];
  total_price = 0;
  total_quantity = 0;
  ngOnInit() {
    if(localStorage.getItem("user_id")){
      var product = {
        user_id: localStorage.getItem("user_id")
      };
      this.myservice.getmyCart(product).subscribe(
        (data:any) => {
          this.carts = data;
          this.findTotal(data);
        },error => {
          console.error("Error", error);        
        }
      );
    }else{
      this.router.navigate(['signin']);
    }
  }
  findTotal(data){
    var total_price = 0;
    var total_quantity = 0;
    data.forEach(function(cart){
      total_price+=cart.price;
      total_quantity+=cart.quantity;
    })
    this.total_price = total_price;
    this.total_quantity = total_quantity;
  }
  removeCart(product){
    var params={
      _id:product.id
    };
    this.myservice.removeCart(params).subscribe(
      (data:any) => {
        this.ngOnInit();
        this.appcomponent.reduceCount();
      },error => {
        console.error("Error", error);        
      }
    );
  }
  updateCart(product){
    if(localStorage.getItem("user_id")){
      var price = product.price/product.quantity;
      delete product._id;
      product.user_id = localStorage.getItem("user_id");
      var cart = {
        productid: product.productid,
        user_id: product.user_id,
        name: product.name,
        image: product.image,
        description: product.description,
        price:price
      };
      cart.price=price;
      this.myservice.addCart(cart).subscribe(        
        (data:any) => {
          this.ngOnInit();
          this.appcomponent.updateCount();
        },error => {
          console.error("Error", error);        
        }
      );
    }else{
      this.router.navigate(['signin']);
    }
  }
}
