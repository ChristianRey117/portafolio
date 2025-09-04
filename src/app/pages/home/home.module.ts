import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { CardModule } from 'primeng/card';
import { HeroSectionComponent } from 'src/app/components/hero-section/hero-section.component';
import { SkillsSectionComponent } from 'src/app/components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from 'src/app/components/projects-section/projects-section.component';
import { WorkExperienceComponent } from 'src/app/components/work-experience/work-experience.component';
import { ContactFormComponent } from 'src/app/components/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuComponent,
    CardModule,
    HeroSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    WorkExperienceComponent,
    ContactFormComponent,
    ContactFormComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
