import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
name:any;
avatar:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('user')?.replace(/['"]+/g,'');
    this.avatar = sessionStorage.getItem('avatar')?.replace(/['"]+/g,'');
  }
  onCreate(){
    this.router.navigate(['/createroom'])
  }
}
