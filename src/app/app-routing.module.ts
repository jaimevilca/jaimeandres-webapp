import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'main', component: HomeComponent},
  { path: 'skills', component: SkillComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
