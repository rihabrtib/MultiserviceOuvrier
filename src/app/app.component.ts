import { Component } from '@angular/core';
import {  Location } from '@angular/common';
//import * as Stomp from 'stompjs';
//import * as SockJS from 'sockjs-client';
//import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //private serverUrl = 'http://localhost:9000/socket'
  title = 'angular';
  //private stompClient;
  constructor(public location: Location) {
    //this.initializeWebSocketConnection();
  }
  // initializeWebSocketConnection(){
  //   let ws = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(ws);
  //   let that = this;
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe("/chat", (message) => {
  //       if(message.body) {
  //         $(".chat").append("<div class='message'>"+message.body+"</div>")
  //         console.log(message.body);
  //       }
  //     });
  //   });
  // }

  // sendMessage(message){
  //   this.stompClient.send("/app/send/message" , {}, message);
  //   $('#input').val('');
  // }
  ngOnInit() {}

  isMap(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if (path === titlee) {
      return false;
    } else {
      return true;
    }
  }
}
