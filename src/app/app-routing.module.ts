import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { ProgramsComponent } from './programs/programs/programs.component';
import { ContentComponent } from './content/content/content.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'programs', component: ProgramsComponent },
  { path: 'content', component: ContentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}