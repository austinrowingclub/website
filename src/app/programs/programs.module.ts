import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';

import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [ProgramsComponent],
  exports: [ProgramsComponent]
})
export class ProgramsModule { }
