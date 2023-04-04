import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
name:any;
nextButton : boolean = true;
images= [
  {src:'assets/images/Avatar_1.png', alt:'avatar_1'},
  {src:'assets/images/Avatar_2.png', alt:'avatar_2'},
  {src:'assets/images/Avatar_3.png', alt:'avatar_3'},
  {src:'assets/images/Avatar_4.png', alt:'avatar_4'},
  {src:'assets/images/Avatar_5.png', alt:'avatar_5'},

];
  selectedIndex: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('user')?.replace(/['"]+/g,'');
  }
  setRow(_index: number,image: string) {
    this.selectedIndex = _index;
    sessionStorage.setItem('avatar',JSON.stringify(image));
    this.nextButton=false;
  }
  onNext(){
    this.router.navigate(['/room'])
  }
}
