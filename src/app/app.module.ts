import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainMenuComponentComponent } from './main-menu-component/main-menu-component.component';
import { CreateUtmComponentComponent } from './create-utm-component/create-utm-component.component';
import { ListUtmComponentComponent } from './list-utm-component/list-utm-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { AppRoutingModule }        from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainMenuComponentComponent,
    CreateUtmComponentComponent,
    ListUtmComponentComponent,
    PageNotFoundComponentComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <--- import into the NgModule
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule { }
