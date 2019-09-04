import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router,private myservice: MyserviceService) { }
  orders;
  alertButton=0;
  ngOnInit() {
    if(localStorage.getItem("user_id")){
      this.getAllOrders();
    }else{
      this.router.navigate(['signin']);
    }
  }
  getAllOrders(){
    this.myservice.getAllOrders().subscribe(
      (data:any) => {
        this.orders=data;
      },error => {
        console.error("Error", error);        
      }
    );
  }
  statusChange(status, id){
    var item = {
      status:status,
      id:id
    };
    this.myservice.updateStatus(item).subscribe(
      (data:any) => {
        
      },error => {
        console.error("Error", error);        
      }
    );
  }
}
