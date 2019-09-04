import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  constructor(private router: Router,private myservice: MyserviceService, private appcomponent: AppComponent) { }
  address;
  editButton=false;
  total_price;
  total_quantity;
  credit=false;
  debit=false;
  alertButton=0;
  errmsg;
  ngOnInit() {
    if(localStorage.getItem("user_id")){
      this.getmyCart();
      this.getmyAddress();
    }else{
      this.router.navigate(['signin']);
    }
  }
  getmyCart(){
    var user = {
      user_id: localStorage.getItem("user_id")
    };
    this.myservice.getmyCart(user).subscribe(
      (data:any) => {
        this.findTotal(data);
      },error => {
        console.error("Error", error);        
      }
    );
  }
  getmyAddress(){
    var user = {
      user_id: localStorage.getItem("user_id")
    };
    this.myservice.getmyAddress(user).subscribe(
      (data:any) => {
        if(data.length>0){
          this.address = data[0];
          this.editButton = true;
        }
      },error => {
        console.error("Error", error);        
      }
    );
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
  buttonClick(value){
    this.credit=false;
    this.debit=false;
    if(value=='credit'){
      this.credit=true;
    }
    if(value=='debit'){
      this.debit=true;
    }
  }
  order(data){
    if(this.address && this.address !== 'null' && this.address !== 'undefined'){
      data.user_id = localStorage.getItem("user_id");
      this.myservice.placeOrder(data).subscribe(
        (data:any) => {
          if(data){
            this.alertButton = 1;
            this.appcomponent.removeCount();
            setTimeout(()=>{
              this.router.navigate(['product']);
            }, 5000);
          }
        },error => {
          console.error("Error", error);  
          this.alertButton=2;    
          this.errmsg="something went wrong"  
        }
      );
    }else{
      this.alertButton=2;
      this.errmsg="Please add delivery address"
    }
  }
}
