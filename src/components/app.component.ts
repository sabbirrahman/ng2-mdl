// Imports from Angular2
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Component, ViewEncapsulation } from '@angular/core';
// MDL Components
import { MdlLayoutComponent, MdlHeaderComponent, MdlDrawerComponent } from './mdl-layout/mdl-layout.component';
// MDL Directives
import { MdlDirective } from '../directives/mdl.directive';
// Services
import { MdlConfigService } from '../services/mdl-config.service'
// Routes
import { Routes } from './routes';
require('material-design-lite/dist/material');
require('mdl-select-component/mdl-selectfield.min');

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.component.html'),
  styles: [
    require('normalize.css/normalize.css'),
    require('highlight.js/styles/default.css'),
    require('material-design-lite/dist/material.min.css'),
    require('mdl-select-component/mdl-selectfield.min.css')
  ],
  directives: [
    MdlDirective,
    ROUTER_DIRECTIVES,
    MdlLayoutComponent,
    MdlHeaderComponent,
    MdlDrawerComponent
  ]
})
@RouteConfig(Routes)
export class App {
  links: Array<Object> = [
    { title: 'Introduction', routerLink: ['Dashboard']        },
    { title: 'Configuration',routerLink: ['MdlConfigServicePage'] },
    { title: 'Upgrading',    routerLink: ['MdlUpgradePage']   },
    { title: 'Text Fields',  routerLink: ['MdlTextFieldPage'] },
    { title: 'Select',       routerLink: ['MdlSelectPage']    },
    { title: 'Check Box',    routerLink: ['MdlCheckBoxPage']  },
    { title: 'Radio Button', routerLink: ['MdlRadioPage']     },
    { title: 'Switch',       routerLink: ['MdlSwitchPage']    },
    { title: 'Button',       routerLink: ['MdlButtonPage']    },
    { title: 'Progress',     routerLink: ['MdlProgressPage']  },
    { title: 'Spinner',      routerLink: ['MdlSpinnerPage']   },
    { title: 'Layout',       routerLink: ['MdlLayoutPage']    },
  ];
}
