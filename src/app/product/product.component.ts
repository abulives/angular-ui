import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router} from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router,private myservice: MyserviceService, private appcomponent: AppComponent) { }
  products: any;
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.myservice.listProducts().subscribe(
        data => {
            if (data) {
                this.products = data;
            }
        },
        error => {
            console.error("Error", error);
        }
    );
  }
  onAddtoCart(product:any){
    if(localStorage.getItem("user_id")){
      product.user_id = localStorage.getItem("user_id");
      this.myservice.addCart(product).subscribe(
        (data:any) => {
          this.appcomponent.updateCount();
          this.router.navigate(['mycart']);
        },error => {
          console.error("Error", error);        
        }
      );
    }else{
      this.router.navigate(['signin']);
    }
  }
  onBuyNow(product:any){
  }
}
