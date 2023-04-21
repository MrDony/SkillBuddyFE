import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  static notificationTitle:any="";
  static notificationBody:any="";
  static showNotification:any=false;
  
  public static async recieveNotification(title:any,body:any){
    debugger
    NotificationComponent.notificationTitle=title;
    NotificationComponent.notificationBody=body;
    this.showNotification=true;
    async function delay() {
      // Pause for 3 seconds using the setTimeout function
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    await delay();
    this.showNotification=false;
    NotificationComponent.notificationTitle="";
    NotificationComponent.notificationBody="";
  }
  
  getNotificationTitle(){
    return NotificationComponent.notificationTitle;
  }
  getNotificationBody(){
    return NotificationComponent.notificationBody;
  }
  getShowNotification(){
    return NotificationComponent.showNotification;
  }
}
