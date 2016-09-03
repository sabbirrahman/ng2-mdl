// Imports from @angular
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Modules
import { Ng2MdlModule } from '../ng2-mdl/ng2-mdl.module';
// Routes
import { DOCUMENTATION_ROUTES } from './documentation.routes';
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

@NgModule({
  declarations: [
    MdlTextFieldPageComponent,
    MdlCheckBoxPageComponent,
    MdlProgressPageComponent,
    MdlUpgradePageComponent,
    MdlSpinnerPageComponent,
    MdlServicePageComponent,
    MdlSelectPageComponent,
    MdlSwitchPageComponent,
    MdlButtonPageComponent,
    MdlLayoutPageComponent,
    MdlRadioPageComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(DOCUMENTATION_ROUTES),
    CommonModule,
    Ng2MdlModule,
    FormsModule
  ],
  exports: [
  ]
})
export class DocumentationModule {}
