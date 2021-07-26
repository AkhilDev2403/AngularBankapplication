import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name=""
  acno=""
  pwd=""

  constructor(private database:DataService, private rout:Router) { }

  ngOnInit(): void {
  }
  
  register(){

    var username= this.name
    var account_num = this.acno
    var pswd = this.pwd
    //alert("clicked")

    let result = this.database.validateRegister(account_num, username, pswd)
    if(result){
      alert("Account created successfully!")
      this.rout.navigateByUrl("")
    }
    else{
      alert("Already Exist! Please Log in")
      this.rout.navigateByUrl("")
    }
  }
  

}
