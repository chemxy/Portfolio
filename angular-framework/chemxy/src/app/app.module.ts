import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SummaryComponent } from './component/main-content/summary/summary.component';
import { ResumeComponent } from './component/main-content/resume/resume.component';
import { ProjectsComponent } from './component/main-content/projects/projects.component';
import { ContactComponent } from './component/main-content/contact/contact.component';
import { PageNotFoundComponent } from './component/main-content/page-not-found/page-not-found.component';
import { JobComponent } from './component/main-content/resume/job/job.component';
import { AboutMeComponent } from './component/main-content/summary/about-me/about-me.component';
import { TechStacksComponent } from './component/main-content/summary/tech-stacks/tech-stacks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    SummaryComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    PageNotFoundComponent,
    JobComponent,
    AboutMeComponent,
    TechStacksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
