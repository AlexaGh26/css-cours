import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionHelpComponent } from './components/section-help/section-help.component';
import { ProductOneComponent } from './components/product-one/product-one.component';
import { ProductTwoComponent } from './components/product-two/product-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionHelpComponent,
    ProductOneComponent,
    ProductTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
