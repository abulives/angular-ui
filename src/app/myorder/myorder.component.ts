import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {

  constructor(private router: Router,private myservice: MyserviceService) { }
  orders;
  ngOnInit() {
    if(localStorage.getItem("user_id")){
      this.getmyOrders();
    }else{
      this.router.navigate(['signin']);
    }
  }
  getmyOrders(){
    var user = {
      user_id: localStorage.getItem("user_id")
    };
    this.myservice.getmyOrders(user).subscribe(
      (data:any) => {
        this.orders=data;
      },error => {
        console.error("Error", error);        
      }
    );
  }
}
