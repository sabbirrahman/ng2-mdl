// Imports from @angular
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Platform and Environment providers/directives/pipes
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// Modules
import { DocumentationModule } from './documentation/documentation.module';
import { Ng2MdlModule } from './ng2-mdl/ng2-mdl.module';
// App is our top level component
import { App } from './app.component';
// Application wide providers
const APP_PROVIDERS = [];

@NgModule({
  bootstrap: [ App ],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    DocumentationModule,
    BrowserModule,
    Ng2MdlModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
