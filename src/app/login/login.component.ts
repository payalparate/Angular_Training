import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   model: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }  

  onSubmit() {
    if(this.model.email==="payal.parate@hcl.com" && this.model.password==="Payal@123"){
      console.log("logged in successfully");
      this.router.navigateByUrl('/member');
    }
    else{
        alert('Invalid Credentials')
    }
  }
  onSubmit2() {
     if(this.model.email1==="user20@gmail.com" && this.model.password1==="User@2020"){
       this.router.navigateByUrl('/librarian');
    } 
    else{
        alert('Invalid Credentials')
    }
  }

}
