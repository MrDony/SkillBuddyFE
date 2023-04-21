import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-completed-jobs',
  templateUrl: './completed-jobs.component.html',
  styleUrls: ['./completed-jobs.component.css']
})
export class CompletedJobsComponent {

  completedJobs:any;

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

  constructor(){
    
    let jobs = SideBarComponent.userData['jobs'];
    for( let i =0 ;i < jobs.length; i++)
    {
      if(jobs[i]['status']=="completed"){
        this.completedJobs.push(jobs[i])
      }
    }
  }

  openWorkerProfile(arg0: any) {
    console.log(arg0);
  }
    

  public static s_completedJobs={
    "jobs":[
      {
        "id":"j-21021",
        "title":"Job Title 1",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
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
        "startingDate":"19-1-2023",
        "expectedCompletionDate":"22-1-2023",
        "endingDate":"23-1-2023"
      },
      {
        "id":"j-21025",
        "title":"Job Title 1",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
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
        "startingDate":"19-1-2023",
        "expectedCompletionDate":"22-1-2023",
        "endingDate":"23-1-2023"
      },
      {
        "id":"j-22021",
        "title":"Job Title 1",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
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
        "startingDate":"19-1-2023",
        "expectedCompletionDate":"22-1-2023",
        "endingDate":"23-1-2023"
      },
      {
        "id":"j-11021",
        "title":"Job Title 1",
        "description":"A software developer designs, develops, and maintains computer software programs. They work with a team of other developers and use programming languages to create software that can be used on a range of devices.",
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
        "startingDate":"19-1-2023",
        "expectedCompletionDate":"22-1-2023",
        "endingDate":"23-1-2023"
      }
    ]
  }
}
