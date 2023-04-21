import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendHandler } from '../services/backend';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-log-in-sign-up',
  templateUrl: './log-in-sign-up.component.html',
  styleUrls: ['./log-in-sign-up.component.css']
})
export class LogInSignUpComponent {

  SIGN_IN=1
  SIGN_UP=2;
  currentTab=1;
  awaitResponse:any = false;
  backendHAndler:BackendHandler = new BackendHandler;
  constructor(private router:Router){
    this.currentTab=this.SIGN_IN;
    this.awaitResponse = false;
  }



  async signInUser(arg0: string,arg1: string) {
    console.log(arg0,arg1);
    let data = {'username':arg0,'password':arg1}
    

    this.awaitResponse=true;
    const result = await this.backendHAndler.sign_in_client(data)
    this.delay(3000)
    this.awaitResponse=false;
    //if response says to log in then log in
    console.log('Sign In = ',result['res'])
    if(result['res']==true) {
      localStorage.setItem('username',arg0)
      localStorage.setItem('password',arg1);
      this.router.navigate(['/client-view']);
    }
    else{
      NotificationComponent.recieveNotification('Cannot Sign In','Incorrect username/email or password. Please try again.')
    }
    
    
  }

  async delay(time:any): Promise<void> {
    console.log('Starting...');
    await new Promise(resolve => setTimeout(resolve, time));
    console.log('Done!');
  }


  async signUpUser(arg0: string,arg1: string,arg2: string) {
    console.log(arg0,arg1,arg2);
    let data = {'username':arg1, 'name':arg0, 'password':arg2}

    this.awaitResponse=true;
    const result = await this.backendHAndler.sign_up_client(data)
    this.delay(3000)
    this.awaitResponse=false;
    //if response says to log in then log in
    console.log('Sign Up = ',result['res'])
    if(result['res']==true){
      localStorage.setItem('username',arg1)
      localStorage.setItem('password',arg2);
      this.router.navigate(['/client-view']);
    }
    else
      NotificationComponent.recieveNotification('Cannot Sign Up','Something went wrong. PLease try again.')
  }
}
