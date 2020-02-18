import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Add Components here...
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ 
  HomeComponent,
];
