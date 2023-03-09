import { Component, Input } from '@angular/core';

interface UserInterface{
  name: string;
  age: string;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  @Input() user: UserInterface;

  constructor(){
    this.user = {} as UserInterface
  }
}

