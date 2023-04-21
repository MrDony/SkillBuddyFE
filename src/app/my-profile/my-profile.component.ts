import { Component } from '@angular/core';
import { BackendHandler } from '../services/backend';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  profileDetails:any=null;
  jobDetails:any=null;

  backendHandler:BackendHandler = new BackendHandler;

  constructor(){
    let result = SideBarComponent.userData;
    this.profileDetails={
      'name':result['name'],
      'email':result['email'],
      'phone':result['phone'],
      'password':result['password']
    }
    this.jobDetails={
      'pending':result['pendingJobs'],
      'active':result['activeJobs'],
      'completed':result['completedJobs']
    }
    console.log(this.profileDetails,this.jobDetails)
  }

  async addEmail(arg0: any) {
    const result = await this.backendHandler.post_user_email({'username':localStorage.getItem('username'),'password':localStorage.getItem('password')},arg0);
    console.log(result);
  }
  async addPhoneNumber(arg0: any) {
    const result = await this.backendHandler.post_user_phone({'username':localStorage.getItem('username'),'password':localStorage.getItem('password')},arg0);
    console.log(result);
  }
}
