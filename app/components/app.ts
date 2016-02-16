import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, ViewEncapsulation} from 'angular2/core';
import {MdlUpgrade} from '../directives/MdlUpgrade/MdlUpgrade';
// Router Components
import {Dashboard}      from './RouterComponents/Dashboard/Dashboard';
import {MdlUpgradePage} from './RouterComponents/MdlUpgradePage/MdlUpgradePage';
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/components/app.html',
  directives: [ROUTER_DIRECTIVES, MdlUpgrade]
})
@RouteConfig([
  { path: '/',           component: Dashboard,      name: 'Dashboard'      },
  { path: '/mdlUpgrade', component: MdlUpgradePage, name: 'MdlUpgradePage' }
])
export class App { }
