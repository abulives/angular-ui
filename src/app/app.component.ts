import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router,
        private myservice: MyserviceService) {}
    title = 'angular-ui';
    navbarOpen = false;
    signinButton;
    username = "";
    user_type = "";
    total=0;
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        if (localStorage.getItem("isLoggedIn")) {
            this.username = localStorage.getItem("user");
            this.user_type = localStorage.getItem("user_type");
            this.signinButton = localStorage.getItem("isLoggedIn");
        } else {
            this.signinButton = "0";
        }
        if(localStorage.getItem("isLoggedIn")){

        }
        this.getCartCount();
    }
    getCartCount(){
        if(localStorage.getItem("user_id")){
            var params = {
                user_id:localStorage.getItem("user_id")
            }
            this.myservice.getCartCount(params).subscribe(
                (data:any) => {
                    if(data.length>0){
                        this.total=data[0].quantity;
                    }
                },
                error => {              
                }
            );
        }
    }
    logout() {
        localStorage.setItem('isLoggedIn', "0");
        localStorage.removeItem('user');
        localStorage.removeItem('user_type');
        localStorage.removeItem('user_id');
        //this.router.navigate(['signin']);
        window.location.href = "/signin";
    }
    updateCount(){
        this.total+=1;
    }
    reduceCount(){
        this.total-=1;
    }
    removeCount(){
        this.total=0;
    }
}
