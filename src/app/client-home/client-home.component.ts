import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { BackendHandler } from '../services/backend';
import { WELCOME_TEXT } from '../services/constants';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {

  welcomeText:any;
  profileDetails:any=null;
  jobDetails:any=null;

  backendHandler:BackendHandler = new BackendHandler;
  constructor(){
    SideBarComponent.activeTab=1;
    this.welcomeText=WELCOME_TEXT;
  }

  async ngOnInit(){
    //get all data and save it into the side bar some where idk
    const result = await this.backendHandler.get_user_details({'username':localStorage.getItem('username'),'password':localStorage.getItem('password')});
    console.log("all user details = ",result);
    SideBarComponent.userData = result;
    this.profileDetails={
      'name':result['name'],
      'email':result['email'],
      'phone':result['phone']
    }
    this.jobDetails={
      'pending':result['pendingJobs'],
      'active':result['activeJobs'],
      'completed':result['completedJobs']
    }
    console.log(this.profileDetails,this.jobDetails)
  }

  HOME=1;
  MY_PROFILE=2;
  MY_JOBS=3;
  ACTIVE_JOBS=4;
  PENDING_JOBS=5;
  COMPLETED_JOBS=6;

  activateTab(arg:any){
    if(arg>=this.HOME && arg<=this.COMPLETED_JOBS){

      if(arg==this.MY_JOBS)
      {
        arg=this.ACTIVE_JOBS
      }
      SideBarComponent.activeTab=arg;
    }
  }

}
