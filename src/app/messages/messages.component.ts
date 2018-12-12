import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /** angular shall inject the singleton MessageService 
   * into that property when it creates the MessagesComponent. 
   */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
