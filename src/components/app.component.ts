// Imports from Angular2
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, ViewEncapsulation} from 'angular2/core';
// MDL Directives
import {MdlUpgradeDirective} from '../directives/mdl-upgrade.directive';
// Router Components
import {DashboardComponent}      from './router-components/dashboard/Dashboard.component';
import {MdlUpgradePageComponent} from './router-components/mdl-upgrade-page/mdl-upgrade-page.component';
require('material-design-lite/dist/material');
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.component.html'),
  styles: [
    require('normalize.css/normalize.css'),
    require('highlight.js/styles/default.css'),
    require('material-design-lite/dist/material.min.css')
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MdlUpgradeDirective
  ]
})
@RouteConfig([
  { path: '/',           component: DashboardComponent,      name: 'Dashboard'      },
  { path: '/mdlUpgrade', component: MdlUpgradePageComponent, name: 'MdlUpgradePage' }
])
export class App { }
