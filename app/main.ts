import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {App} from './components/app';

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
