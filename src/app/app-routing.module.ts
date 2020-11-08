import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { LisitingDetailComponent } from './components/lisiting-detail/lisiting-detail.component';
import { ListingFormComponent } from './components/listing-form/listing-form.component';
import { ListingComponent } from './components/listing/listing.component';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';
import { WorkerFormComponent } from './components/worker-form/worker-form.component';
import { WorkerComponent } from './components/worker/worker.component';

const routes: Routes = [
  { path: 'clients', component: ClientComponent},
  { path: 'workers', component: WorkerComponent},
  { path: 'listings', component: ListingComponent},
  { path: 'clients/:id', component: ClientDetailComponent},
  { path: 'listings/:id', component: LisitingDetailComponent},
  { path: 'workers/:id', component: WorkerDetailComponent },
  { path: 'newclient', component: ClientFormComponent},
  { path: 'newworker', component: WorkerFormComponent},
  { path: 'newlisting', component: ListingFormComponent},
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
