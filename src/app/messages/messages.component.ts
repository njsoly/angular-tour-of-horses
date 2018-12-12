import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /** Angular shall inject the singleton MessageService 
   * into that property when it creates the MessagesComponent. 
   * 
   * The "messageService" property MUST BE PUBLIC because 
   * we will soon bind to it in the template.
   */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
