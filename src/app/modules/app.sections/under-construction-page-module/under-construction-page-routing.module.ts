import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstructionPageComponent } from './under-construction-page.component';

const routes: Routes = [{ path: '', component: UnderConstructionPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderConstructionPageRoutingModule { }
