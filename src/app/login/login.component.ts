import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username:any
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required]
    })
  }
onSubmit(){
this.username=sessionStorage.setItem('user',JSON.stringify(this.loginForm.value.username))
  this.router.navigate(['/avatar'])
}
}
