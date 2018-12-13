import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { ProgramsComponent } from './programs/programs/programs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'programs', component: ProgramsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}