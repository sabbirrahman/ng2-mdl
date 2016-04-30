// Imports from Angular2
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, ViewEncapsulation} from 'angular2/core';
// MDL Directives
import {MdlUpgradeDirective} from '../directives/mdl-upgrade.directive';
// Services
import { MdlConfigService } from '../services/mdl-config.service'
// Router Components
import {DashboardComponent}        from './router-components/dashboard/Dashboard.component';
import {MdlUpgradePageComponent}   from './router-components/mdl-upgrade-page/mdl-upgrade-page.component';
import {MdlTextFieldPageComponent} from './router-components/mdl-text-field-page/mdl-text-field-page.component';
import {MdlCheckBoxPageComponent}  from './router-components/mdl-check-box-page/mdl-check-box-page.component';
import {MdlRadioPageComponent}     from './router-components/mdl-radio-page/mdl-radio-page.component';
import {MdlSwitchPageComponent}    from './router-components/mdl-switch-page/mdl-switch-page.component';
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
@RouteConfig([
  { path: '/',               component: DashboardComponent,        as: 'Dashboard'        },
  { path: '/mdl-upgrade',    component: MdlUpgradePageComponent,   as: 'MdlUpgradePage'   },
  { path: '/mdl-text-field', component: MdlTextFieldPageComponent, as: 'MdlTextFieldPage' },
  { path: '/mdl-check-box',  component: MdlCheckBoxPageComponent,  as: 'MdlCheckBoxPage'  },
  { path: '/mdl-radio',      component: MdlRadioPageComponent,     as: 'MdlRadioPage'     },
  { path: '/mdl-switch',     component: MdlSwitchPageComponent,    as: 'MdlSwitchPage'    }
])
export class App { }
