import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CreateUtmComponentComponent } from './create-utm-component/create-utm-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


//routing configuration
const appRoutes: Routes = [
  { path: 'utm/edit/:id/:name', component: CreateUtmComponentComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

 
@NgModule({

   imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}