import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkerComponent } from './components/worker/worker.component';
import { ListingComponent } from './components/listing/listing.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { LisitingDetailComponent } from './components/lisiting-detail/lisiting-detail.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';
import { FormsModule} from '@angular/forms';
import { WorkerFormComponent } from './components/worker-form/worker-form.component';
import { ListingFormComponent } from './components/listing-form/listing-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    WorkerComponent,
    ListingComponent,
    ClientDetailComponent,
    LisitingDetailComponent,
    ClientFormComponent,
    WorkerDetailComponent,
    WorkerFormComponent,
    ListingFormComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
