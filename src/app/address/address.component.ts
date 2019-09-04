import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  errmsg;
  alertButton;
  editButton = false;
  deliveryaddres;
  constructor(
    private formBuilder: FormBuilder, private router: Router,
    private myservice: MyserviceService) {
      this.deliveryaddres = this.formBuilder.group({
        name: "",
        address:"",
        pincode:"",
        phone:""
      });
     }

  ngOnInit() {
    
    if(localStorage.getItem("user_id")){
      var user = {
        user_id: localStorage.getItem("user_id")
      };
      this.myservice.getmyAddress(user).subscribe(
        (data:any) => {
          if(data.length>0){
            this.deliveryaddres = this.formBuilder.group({
              name: data[0].name,
              address: data[0].address,
              pincode:data[0].pincode,
              phone:data[0].phone
            });
          }
        },error => {
          console.error("Error", error);        
        }
      );
    }else{
      this.router.navigate(['signin']);
    }
  }
  saveAddress(address) {
    address.user_id = localStorage.getItem("user_id");
    this.myservice.saveAddress(address).subscribe(
        data => {
            if (data) {
              window.history.back();
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
