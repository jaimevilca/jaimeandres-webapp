import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ScrollComponent } from './scroll/scroll.component';

import {SlideshowModule} from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    ProjectComponent,
    AboutComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
