import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    username = localStorage.getItem("user");
    users;
    alertButton = '0';
    constructor(private router: Router, private myservice: MyserviceService) {}

    ngOnInit() {
    	if (localStorage.getItem("isLoggedIn") == "1") {           
        	this.getUsers();
        } else {
            this.router.navigate(['signin']);
        }
    }
    getUsers() {
        this.myservice.listUsers().subscribe(
            data => {
                if (data) {
                    this.users = data;
                }
            },
            error => {
                console.error("Error", error);
            }
        );
    }
    onClickDelete(user) {
        this.myservice.deleteUser(user).subscribe(
            data => {
                this.users.splice(this.users.indexOf(user), 1);
                this.alertButton = '1';
            },
            error => {
                this.alertButton = '1';
                console.error("Error", error);
            }
        );
    }

}