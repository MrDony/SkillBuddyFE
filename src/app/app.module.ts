import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInSignUpComponent } from './log-in-sign-up/log-in-sign-up.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ActiveJobsComponent } from './active-jobs/active-jobs.component';
import { PendingJobsComponent } from './pending-jobs/pending-jobs.component';
import { CompletedJobsComponent } from './completed-jobs/completed-jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkerApplicationsComponent } from './worker-applications/worker-applications.component';
import { NotificationComponent } from './notification/notification.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInSignUpComponent,
    SideBarComponent,
    ClientHomeComponent,
    ClientViewComponent,
    ActiveJobsComponent,
    PendingJobsComponent,
    CompletedJobsComponent,
    CreateJobComponent,
    WorkerApplicationsComponent,
    NotificationComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
