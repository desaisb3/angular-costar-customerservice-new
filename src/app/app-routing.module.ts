import { AgentComponent } from './agent/agent.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'customerservice', component: CustomerserviceComponent},
  {path: 'agent', component: AgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
