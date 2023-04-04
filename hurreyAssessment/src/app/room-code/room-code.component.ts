import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-code',
  templateUrl: './room-code.component.html',
  styleUrls: ['./room-code.component.css']
})
export class RoomCodeComponent implements OnInit {
  name: any;
  avatar: any;
  roomCodeForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('user')?.replace(/['"]+/g, '');
    this.avatar = sessionStorage.getItem('avatar')?.replace(/['"]+/g, '');
    this.roomCodeForm = this.fb.group({
      roomCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    })
  }
  onInput(event: any) {
    if (this.roomCodeForm.get('roomCode')?.valid) {
      event.preventDefault();
    }
  }
}
