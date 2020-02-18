import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { MainComponent } from './components/main/main.component';

import { NgwWowModule } from 'ngx-wow';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [
    AppComponent,    
    MainComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgwWowModule,
    ResizableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
