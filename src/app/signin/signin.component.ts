import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  alertMessage = false;
  constructor(private router: Router,
  private myservice: MyserviceService) {  }

  ngOnInit() {
  }
  onClickSubmit(user) {
      this.myservice.signIn(user).subscribe(
       (data:any) => {
       		if(data){
      			localStorage.setItem('isLoggedIn', "1");
      			localStorage.setItem('user', data.username);
         		//this.router.navigate(['home']);
				window.location.href = "/home";
			}
       },
       error => {
         this.alertMessage = true;
         console.error("Error", error);
         
       }
    );
  }
}

