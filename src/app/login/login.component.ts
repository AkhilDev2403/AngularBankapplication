import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  heading = "Welcome to Zach Bank"

  // acNo = "please enter account number"

  acno = ""

  pwd = ""


  user:any = {
    1000 : {acc_no:1000, user_name:"Akhil", password:123, balance:15000},
    2000 : {acc_no:2000, user_name:"Loki", password:456, balance:25000},
    3000 : {acc_no:3000, user_name:"Ben", password:789, balance:8000}
  }

  constructor(private routing:Router) { }

  ngOnInit(): void {
  }

  // accnt_no(event:any){
  //   // console.log(event.target.value);
  //   this.acc_num = event.target.value
    
  // }

  // pwdChange(event:any){
  //   this.pwd = event.target.value
  // }

  
 //1. by using ngModel
  
  login(){

    var account_number = this.acno
    console.log(account_number);
    
    var password = this.pwd
    console.log(password);
    

    let accntDetails = this.user

    if(account_number in accntDetails){

      if(password == accntDetails[account_number]["password"]){

        alert("login success")
        this.routing.navigateByUrl("dashboard")
        

      }
      else{
        alert("invalid password")
      }

    }
    else{
      alert("invalid acount number")
    }
  }

 


  //2. By using template referencing variable  (#acno, #pwd)

  // login(a:any,p:any){
  //   // console.log(a);
    

  //   var account_number = a.value
  //   //console.log(account_number);
    
  //   var password = p.value
  //   //console.log(password);
    

  //   let accntDetails = this.user

  //   if(account_number in accntDetails){

  //     if(password == accntDetails[account_number]["password"]){

  //       alert("login success")

  //     }
  //     else{
  //       alert("invalid password")
  //     }

  //   }
  //   else{
  //     alert("invalid acount number")
  //   }
  // }

  


}
