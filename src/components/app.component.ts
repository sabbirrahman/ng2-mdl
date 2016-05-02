// Imports from Angular2
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Component, ViewEncapsulation } from 'angular2/core';
// MDL Components
import { MdlLayoutComponent, MdlHeaderComponent, MdlDrawerComponent } from './mdl-layout/mdl-layout.component';
// MDL Directives
import { MdlUpgradeDirective } from '../directives/mdl-upgrade.directive';
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
    MdlLayoutComponent,
    MdlHeaderComponent,
    MdlDrawerComponent,
    MdlUpgradeDirective
  ]
})
@RouteConfig(Routes)
export class App {
  links: Array<Object> = [
    { title: 'Introduction', routerLink: ['Dashboard']        },
    { title: 'Configuration',routerLink: ['MdlConfigServicePage'] },
    { title: 'Upgrading',    routerLink: ['MdlUpgradePage']   },
    { title: 'Text Fields',  routerLink: ['MdlTextFieldPage'] },
    { title: 'Check Box',    routerLink: ['MdlCheckBoxPage']  },
    { title: 'Radio Button', routerLink: ['MdlRadioPage']     },
    { title: 'Switch',       routerLink: ['MdlSwitchPage']    },
    { title: 'Button',       routerLink: ['MdlButtonPage']    },
    { title: 'Progress',     routerLink: ['MdlProgressPage']  },
    { title: 'Spinner',      routerLink: ['MdlSpinnerPage']   },
    { title: 'Layout',       routerLink: ['MdlLayoutPage']    },
  ];
}
