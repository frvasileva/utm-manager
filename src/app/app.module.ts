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

//routing configuration
const appRoutes: Routes = [
  { path: 'utm/edit', component: CreateUtmComponentComponent },
 // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  //{ path: '**', component: PageNotFoundComponent }
];



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
    HttpClientModule,
    RouterModule.forRoot(
          appRoutes, 
          { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule { }
