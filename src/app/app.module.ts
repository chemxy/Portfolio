import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import {MatChipsModule} from '@angular/material/chips';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    WorkExperienceComponent,
    SkillsComponent,
    EducationComponent,
    HeaderComponent,
    NavigationComponent,
    HighlightsComponent,
    ServicesComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        LayoutModule,
        MatChipsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
