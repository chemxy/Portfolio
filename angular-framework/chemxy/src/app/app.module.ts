import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryComponent } from './component/main-content/summary/summary.component';
import { ResumeComponent } from './component/main-content/resume/resume.component';
import { ProjectsComponent } from './component/main-content/projects/projects.component';
import { ContactComponent } from './component/main-content/contact/contact.component';
import { ExitComponent } from './component/main-content/exit/exit.component';

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
    ExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
