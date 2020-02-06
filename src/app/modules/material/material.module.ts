import { NgModule } from '@angular/core';

//Import Material Components here...
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

//Add Material Components here...
const MaterialComponents = [ 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
