import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  newMessage: string;
  addMessage():void{
    this.messageService.add(this.newMessage);
    console.log(this.messageService.messages[1])
    this.newMessage = ""
  }
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
