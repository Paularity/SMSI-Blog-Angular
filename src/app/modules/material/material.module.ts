import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';

//Add Material Components here...
const MaterialComponents = [ 
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatToolbarModule,
  MatTreeModule
];

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
