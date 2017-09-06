// Imports from @angular
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';
// Modules
import { DocumentationModule } from './documentation/documentation.module';
import { Ng2MdlModule } from './ng2-mdl/ng2-mdl.module';
// App is our top level component
import { App } from './app.component';

@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    DocumentationModule,
    BrowserModule,
    Ng2MdlModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class AppModule { }

