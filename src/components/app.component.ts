// Imports from Angular2
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, ViewEncapsulation} from 'angular2/core';
// MDL Directives
import {MdlUpgradeDirective} from '../directives/mdl-upgrade.directive';
// Services
import { MdlConfigService } from '../services/mdl-config.service'
// Routes
import { Routes } from './routes';
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
  ],
  providers: [MdlConfigService]
})
@RouteConfig(Routes)
export class App { }
