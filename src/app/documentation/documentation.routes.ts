// Imports from @angular
import { Routes } from '@angular/router';
// Router Components
import { MdlTextFieldPageComponent } from './mdl-text-field-page/mdl-text-field-page.component';
import { MdlCheckBoxPageComponent } from './mdl-check-box-page/mdl-check-box-page.component';
import { MdlProgressPageComponent } from './mdl-progress-page/mdl-progress-page.component';
import { MdlUpgradePageComponent } from './mdl-upgrade-page/mdl-upgrade-page.component';
import { MdlSpinnerPageComponent } from './mdl-spinner-page/mdl-spinner-page.component';
import { MdlServicePageComponent } from './mdl-service-page/mdl-service-page.component';
import { MdlSelectPageComponent } from './mdl-select-page/mdl-select-page.component';
import { MdlSwitchPageComponent } from './mdl-switch-page/mdl-switch-page.component';
import { MdlButtonPageComponent } from './mdl-button-page/mdl-button-page.component';
import { MdlLayoutPageComponent } from './mdl-layout-page/mdl-layout-page.component';
import { MdlRadioPageComponent } from './mdl-radio-page/mdl-radio-page.component';
import { DashboardComponent } from './dashboard/Dashboard.component';

export const DOCUMENTATION_ROUTES: Routes = [
  { path: '',               component: DashboardComponent        },
  { path: 'mdl-upgrade',    component: MdlUpgradePageComponent   },
  { path: 'mdl-text-field', component: MdlTextFieldPageComponent },
  { path: 'mdl-select',     component: MdlSelectPageComponent    },
  { path: 'mdl-check-box',  component: MdlCheckBoxPageComponent  },
  { path: 'mdl-radio',      component: MdlRadioPageComponent     },
  { path: 'mdl-switch',     component: MdlSwitchPageComponent    },
  { path: 'mdl-button',     component: MdlButtonPageComponent    },
  { path: 'mdl-progress',   component: MdlProgressPageComponent  },
  { path: 'mdl-spinner',    component: MdlSpinnerPageComponent   },
  { path: 'mdl-layout',     component: MdlLayoutPageComponent    },
  { path: 'mdl-service',    component: MdlServicePageComponent   }
];
