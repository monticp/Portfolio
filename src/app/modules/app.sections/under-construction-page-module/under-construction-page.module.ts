import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderConstructionPageRoutingModule } from './under-construction-page-routing.module';
import { UnderConstructionPageComponent } from './under-construction-page.component';


@NgModule({
  declarations: [UnderConstructionPageComponent],
  imports: [
    CommonModule,
    UnderConstructionPageRoutingModule
  ]
})
export class UnderConstructionPageModule { }
