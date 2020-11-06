import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HiringFormComponent } from './hiring-form/hiring-form.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { JobListingFormComponent } from './job-listing-form/job-listing-form.component';
import { JobListingComponent } from './job-listing/job-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeBodyComponent,
    FooterComponent,
    DashboardComponent,
    AboutComponent,
    HiringFormComponent,
    WorkerFormComponent,
    JobListingFormComponent,
    JobListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
