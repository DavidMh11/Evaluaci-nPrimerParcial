import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'about', component:  AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    ErrorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
