import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { BackendHandler } from '../services/backend';

@Component({
  selector: 'app-pending-jobs',
  templateUrl: './pending-jobs.component.html',
  styleUrls: ['./pending-jobs.component.css']
})
export class PendingJobsComponent {

  pendingJobs:any = [];

  /* 
"id":"",
      "title":title,
      "description":desc,
      "requiredSkills":this.selectedSkills,
      "workers":[],
      "postedDate":formattedDate,
      "startingDate":"",
      "expectedFinishingTime":"",
      "finishisngDate":"",
      "review":"",
      "status":"pending",
      "minimumBudget":minBudget,
      "maximumBudget":maxBudget
*/

  backendHandler:BackendHandler=new BackendHandler;

  constructor(){

    let jobs = SideBarComponent.userData['jobs'];
    for( let i =0 ;i < jobs.length; i++)
    {
      if(jobs[i]['status']=="pending"){
        this.pendingJobs.push(jobs[i])
      }
    }
  }

  async removePendingJobAtIndex(i:any){
    
    const res = await this.backendHandler.delete_a_job_from_client({'username':localStorage.getItem('username'),'password':localStorage.getItem('password')},this.pendingJobs[i]['id'])
    this.pendingJobs.splice(i,1);
  }

  viewApplicantsOfPendingJobAtIndex(i:any){
    console.log("view applicants of = ",this.pendingJobs[i])
  }

  public static s_pendingJobs={
    "jobs":[
      {
        "ID":"21021",
        "title":"Job Title 1",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023"
      },
      {
        "ID":"21025",
        "title":"Job Title 2",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023"
      },
      {
        "ID":"22021",
        "title":"Job Title 3",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023"
      },
      {
        "ID":"11021",
        "title":"Job Title 4",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023"
      }
    ]
  }
}
