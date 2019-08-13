import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {}
    title = 'angular-ui';
    navbarOpen = false;
    signinButton;
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        if (localStorage.getItem("isLoggedIn")) {
            this.signinButton = localStorage.getItem("isLoggedIn");
        } else {
            this.signinButton = "0";
        }
    }
    logout() {
        localStorage.setItem('isLoggedIn', "0");
        //this.router.navigate(['signin']);
        window.location.href = "/signin";
    }
}
