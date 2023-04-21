import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInSignUpComponent } from './log-in-sign-up/log-in-sign-up.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ActiveJobsComponent } from './active-jobs/active-jobs.component';
import { PendingJobsComponent } from './pending-jobs/pending-jobs.component';
import { CompletedJobsComponent } from './completed-jobs/completed-jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path: "",component: LogInSignUpComponent},
  {path:"client-view",component:ClientViewComponent,children:
    [
      {path:"home",component:ClientHomeComponent},
      {path:"my-profile",component:MyProfileComponent},
      {path:"active-jobs",component:ActiveJobsComponent},
      {path:"pending-jobs",component:PendingJobsComponent},
      {path:"completed-jobs",component:CompletedJobsComponent},
      {path:"create-job",component:CreateJobComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
