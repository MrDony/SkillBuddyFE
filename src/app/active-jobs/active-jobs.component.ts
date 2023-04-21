import { Component, OnInit } from '@angular/core';
import { BackendHandler } from '../services/backend';
import { HttpClient } from '@angular/common/http';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-active-jobs',
  templateUrl: './active-jobs.component.html',
  styleUrls: ['./active-jobs.component.css']
})
export class ActiveJobsComponent {
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

  activeJobs:any = [];
  backendHandler:BackendHandler = new BackendHandler;
  constructor(){
    let jobs = SideBarComponent.userData['jobs'];
    for( let i =0 ;i < jobs.length; i++)
    {
      if(jobs[i]['status']=="active"){
        this.activeJobs.push(jobs[i])
      }
    }

    
  }

  async ngOnInit() {
    
  }

  openWorkerProfile(arg:any){
    console.log(arg);
  }

  markCompletedActiveJob(i:any){
    this.activeJobs.splice(i,1);
  }
  deleteActiveJob(i:any){
    this.activeJobs.splice(i,1);
  }

  public static s_activeJobs={
    "jobs":[
      {
        "id":"j-21021",
        "title":"Job Title 1",
        "description":"A software developer designs,   ...",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023",
        "workers":[
          {
            "name":"Daoud Mosaoum",
            "id":"w-20231"
          },
          {
            "name":"Mukhtar Hakkani",
            "id":"w-20232"
          },
          {
            "name":"Nisar Wajib",
            "id":"w-20233"
          }
        ],
        "expectedCompletionTime":"22-1-2023"
      },
      {
        "id":"j-21025",
        "title":"Job Title 1",
        "description":"A software developer designs,   ...",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023",
        "workers":[
          {
            "name":"Daoud Mosaoum",
            "id":"w-20231"
          },
          {
            "name":"Mukhtar Hakkani",
            "id":"w-20232"
          },
          {
            "name":"Nisar Wajib",
            "id":"w-20233"
          }
        ],
        "expectedCompletionTime":"22-1-2023"
      },
      {
        "id":"j-22021",
        "title":"Job Title 1",
        "description":"A software developer designs,   ...",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023",
        "workers":[
          {
            "name":"Daoud Mosaoum",
            "id":"w-20231"
          },
          {
            "name":"Mukhtar Hakkani",
            "id":"w-20232"
          },
          {
            "name":"Nisar Wajib",
            "id":"w-20233"
          }
        ],
        "expectedCompletionTime":"22-1-2023"
      },
      {
        "id":"j-11021",
        "title":"Job Title 1",
        "description":"A software developer designs,   ...",
        "requiredSkills":[
          "Gardenning",
          "Floor Laying",
          "Plumbing"
        ],
        "postedDate":"22-1-2023",
        "workers":[
          {
            "name":"Daoud Mosaoum",
            "id":"w-20231"
          },
          {
            "name":"Mukhtar Hakkani",
            "id":"w-20232"
          },
          {
            "name":"Nisar Wajib",
            "id":"w-20233"
          }
        ],
        "expectedCompletionTime":"22-1-2023"
      }
    ]
  }
}
