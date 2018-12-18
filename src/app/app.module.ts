import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './shared/components/components.module';
import { HomeModule } from './home/home.module';
import { ProgramsModule } from './programs/programs.module';
import { SharedModule } from './shared/shared.module';
import { ContentModule} from './content/content.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HomeModule,
    ProgramsModule,
    SharedModule, 
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
