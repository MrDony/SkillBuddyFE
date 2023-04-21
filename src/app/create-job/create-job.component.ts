import { Component } from '@angular/core';
import {POSSBILE_SKILL_SET} from '../services/constants'
import { BackendHandler } from '../services/backend';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {



  possibleSkills=POSSBILE_SKILL_SET;
  backendHandler:BackendHandler = new BackendHandler;
  selectedSkills:any=[]
  postingJob:any;
  constructor(){
    this.selectedSkills=new Array();
    this.postingJob=false;
  }

  async createJob(title: string, 
            desc: string,
            minBudget: string,
            maxBudget: string,
            days: string,
            months: string,
            years: string) {

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-UK', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    let newJob={
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
    }
    console.log(newJob);

    this.postingJob=true;
    const res = await this.backendHandler.post_a_job_from_client({'username':localStorage.getItem('username'),'password':localStorage.getItem('password')},newJob)
    console.log('Starting...');
    await this.delay(3000)
    this.postingJob=false;
  }

  async delay(time:any): Promise<void> {
    console.log('Starting...');
    await new Promise(resolve => setTimeout(resolve, time));
    console.log('Done!');
  }
    

  addSkill(arg0: string) {
    if(!this.selectedSkills.includes(arg0))
    {
      this.selectedSkills.push(arg0);
    }
    else{
      this.selectedSkills.splice(this.selectedSkills.findIndex((ele: string) => ele === arg0),1);
    }
  }
  addNewSkill(arg0: string) {
    if(arg0.length>0){
      for(let i in this.possibleSkills){
        if(arg0==this.possibleSkills[i]['name']){
          return
        }
      }
      
      if(!this.possibleSkills.includes({"name":arg0,"description":"n/a"}))
        this.possibleSkills.push({"name":arg0,"description":"n/a"});
      this.addSkill(arg0);
    }
  }
}
