import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  onClickSubmit(user:any) {
      this.myservice.signIn(user).subscribe(
       (data:any) => {
       		if(data){
      			localStorage.setItem('isLoggedIn', "1");
            localStorage.setItem('user', data.username);
            localStorage.setItem('user_type', data.user_type);
            localStorage.setItem('user_id', data._id);
         		//this.router.navigate(['home']);
				    window.location.href = "/product";
			    }
       },
       error => {
         this.alertMessage = true;
         console.error("Error", error);
         
       }
    );
  }
}

