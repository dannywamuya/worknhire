// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { AboutComponent } from '../app/about/about.component';
import { FooterComponent } from '../app/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import { HomeBodyComponent } from '../app/home-body/home-body.component';
import { NavComponent } from '../app/nav/nav.component';
import { HiringFormComponent } from './hiring-form/hiring-form.component';

const routes: Routes = [
  { path: 'index', component: DashboardComponent },
  { path: 'nav', component: NavComponent },
  { path: 'home-body', component: HomeBodyComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hiring-form', component: HiringFormComponent },

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