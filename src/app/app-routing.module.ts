import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Add Components here...
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BusinessPhilosophyComponent } from './components/business-philosophy/business-philosophy.component';
import { BusinessModelComponent } from './components/business-model/business-model.component';
import { EngineeringComponent } from './components/engineering/engineering.component';
import { PartsEquipmentComponent } from './components/parts-equipment/parts-equipment.component';
import { AssetManagementComponent } from './components/asset-management/asset-management.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'business-philosophy', component: BusinessPhilosophyComponent },
  { path: 'business-model', component: BusinessModelComponent },
  { path: 'engineering', component: EngineeringComponent },
  { path: 'parts-equipment', component: PartsEquipmentComponent },
  { path: 'asset-management', component: AssetManagementComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'sitemap', component: SitemapComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ 
  DashboardComponent, 
  HomeComponent,
  AboutComponent,
  BusinessPhilosophyComponent,
  BusinessModelComponent,
  EngineeringComponent,
  PartsEquipmentComponent,
  AssetManagementComponent,
  ServiceComponent,
  ContactsComponent,
  SitemapComponent
];
