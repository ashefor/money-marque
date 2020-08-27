import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { AntComponentsModule } from '../ant-components/ant-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrationComponent, StepperComponent],
  imports: [
    CommonModule,
    AntComponentsModule,
    ReactiveFormsModule, 
    FormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
