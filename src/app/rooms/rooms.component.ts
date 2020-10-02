import { Component, OnInit } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  public state: boolean;
  public rooms: Room[];

  constructor() {
    this.rooms = [
      new Room('Musk', false),
      new Room('Gates', false),
      new Room('Jobs', false),
    ];
  }

  ngOnInit(): void {
  }
  switchState(currentRoom: Room): void {
  currentRoom.state = !currentRoom.state;
  currentRoom.lastUpdate = this.getCurrentTime();
  }
  getCurrentTime(): Date {
    return new Date();
  }
}
