// Import from @angular
import { Component, ViewEncapsulation } from '@angular/core';
// MDL Components
import { MdlLayoutComponent } from './components/mdl-layout/mdl-layout.component';
import { MdlHeaderComponent } from './components/mdl-layout/mdl-layout.component';
import { MdlDrawerComponent } from './components/mdl-layout/mdl-layout.component';
// MDL Directives
import { MdlDirective } from './directives/mdl.directive';
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
    MdlLayoutComponent,
    MdlHeaderComponent,
    MdlDrawerComponent
  ]
})
export class App {
  links: Array<Object> = [
    { title: 'Introduction', routerLink: ['/'] },
    { title: 'Configuration',routerLink: ['/mdl-service'] },
    { title: 'Upgrading',    routerLink: ['/mdl-upgrade'] },
    { title: 'Text Fields',  routerLink: ['/mdl-text-field'] },
    { title: 'Select',       routerLink: ['/mdl-select'] },
    { title: 'Check Box',    routerLink: ['/mdl-check-box'] },
    { title: 'Radio Button', routerLink: ['/mdl-radio'] },
    { title: 'Switch',       routerLink: ['/mdl-switch'] },
    { title: 'Button',       routerLink: ['/mdl-button'] },
    { title: 'Progress',     routerLink: ['/mdl-progress'] },
    { title: 'Spinner',      routerLink: ['/mdl-spinner'] },
    { title: 'Layout',       routerLink: ['/mdl-layout'] }
  ];
}
