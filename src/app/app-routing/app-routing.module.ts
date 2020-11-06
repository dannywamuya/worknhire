import { AboutComponent } from './../about/about.component';
import { FooterComponent } from './../footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HomeBodyComponent } from '../home-body/home-body.component';
import { NavComponent } from '../nav/nav.component';

const routes: Routes = [
  { path: 'index', component: DashboardComponent },
  { path: 'nav', component: NavComponent },
  { path: 'home-body', component: HomeBodyComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, NavComponent, HomeBodyComponent, FooterComponent, AboutComponent]