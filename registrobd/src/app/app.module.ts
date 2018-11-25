import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, RouterModule } from '@angular/router';
import { LayoutModule } from '@progress/kendo-angular-layout';


import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';


import { APP_BASE_HREF } from '@angular/common';
import { panelbarRouting, appRoutingProviders } from './components/body/panelbar.routes';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import HomeComponent from './components/body/home.component';
import ProductsComponent from './components/body/products.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent, HomeComponent, ProductsComponent, TablaComponent
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
      LayoutModule, RouterModule, panelbarRouting,GridModule,
      HttpClientModule
  ],
  providers:    [
    appRoutingProviders, { provide: APP_BASE_HREF, useValue : window.location.pathname }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
