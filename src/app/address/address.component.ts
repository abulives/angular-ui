import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  errmsg;
  alertButton;
  constructor(private router: Router,
    private myservice: MyserviceService) { }

  ngOnInit() {
    if(!localStorage.getItem("user_id")){
      this.router.navigate(['signin']);
    }
  }
  saveAddress(user) {
    user.user_id = localStorage.getItem("user_id");
    this.myservice.saveAddress(user).subscribe(
        data => {
            if (data) {
                this.router.navigate(['mycart']);
            }
        },
        error => {
            this.alertButton = '2';
            if(error.error.errmsg){
                this.errmsg = error.error.errmsg;
            }else if(error.error.message){
                this.errmsg = error.error.message;
            }else{
                this.errmsg = "Something went wrong.";
            }
        }
    );
  }
}
