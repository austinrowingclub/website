import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';

import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule { }
