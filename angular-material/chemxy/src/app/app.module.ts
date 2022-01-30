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
import { TechStacksComponent } from './component/main-content/tech-stacks/tech-stacks.component';
import { ProjectComponent } from './component/main-content/projects/project/project.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    TechStacksComponent,
    ProjectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
