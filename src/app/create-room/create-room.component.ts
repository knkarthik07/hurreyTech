import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  createRoomForm!: FormGroup;
  name:any;
avatar:any;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('user')?.replace(/['"]+/g,'');
    this.avatar = sessionStorage.getItem('avatar')?.replace(/['"]+/g,'');
    this.createRoomForm = this.fb.group({
      roomname: ['',Validators.required],
      player: ['',[Validators.required,Validators.pattern('^[1-5]{1}$')]]
    })
  }
  onSubmit(){
    this.router.navigate(['/roomcode'])
  }
}
