import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Add Components here...
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ DashboardComponent ];
