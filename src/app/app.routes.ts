// Imports from @angular
import { RouterConfig } from '@angular/router';
// Router Components
import { MdlTextFieldPageComponent } from './components/router-components';
import { MdlCheckBoxPageComponent } from './components/router-components';
import { MdlProgressPageComponent } from './components/router-components';
import { MdlUpgradePageComponent } from './components/router-components';
import { MdlSpinnerPageComponent } from './components/router-components';
import { MdlServicePageComponent } from './components/router-components';
import { MdlSelectPageComponent } from './components/router-components';
import { MdlSwitchPageComponent } from './components/router-components';
import { MdlButtonPageComponent } from './components/router-components';
import { MdlLayoutPageComponent } from './components/router-components';
import { MdlRadioPageComponent } from './components/router-components';
import { DashboardComponent } from './components/router-components';

export const routes: RouterConfig = [
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
