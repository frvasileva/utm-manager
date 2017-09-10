import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainMenuComponentComponent } from './main-menu-component/main-menu-component.component';
import { CreateUtmComponentComponent } from './create-utm-component/create-utm-component.component';
import { ListUtmComponentComponent } from './list-utm-component/list-utm-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainMenuComponentComponent,
    CreateUtmComponentComponent,
    ListUtmComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <--- import into the NgModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
