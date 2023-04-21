import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  public static activeTab=0;
  public static userData:any;
  HOME=1;
  MY_PROFILE=2;
  MY_JOBS=3;
  ACTIVE_JOBS=4;
  PENDING_JOBS=5;
  COMPLETED_JOBS=6;

  constructor(private router:Router){
    this.router.navigate(['client-view/home']);
  }

  activateTab(arg:any){
    if(arg>=this.HOME && arg<=this.COMPLETED_JOBS){

      if(arg==this.MY_JOBS)
      {
        arg=this.ACTIVE_JOBS
      }
      SideBarComponent.activeTab=arg;
    }
  }
  getActiveTab(){
    return SideBarComponent.activeTab;
  }
}
