import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    alertButton = '0';
    constructor(private router: Router,
        private myservice: MyserviceService) {}

    ngOnInit() {}
    onClickSubmit(user) {
        this.myservice.registerUser(user).subscribe(
            data => {
                if (data) {
                    this.alertButton = '1';
                    this.router.navigate(['signin']);
                }
            },
            error => {
                this.alertButton = '2';
                console.error("Error", error);
            }
        );
    }
}
