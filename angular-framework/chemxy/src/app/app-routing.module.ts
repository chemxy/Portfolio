import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/main-content/contact/contact.component';
import { ProjectsComponent } from './component/main-content/projects/projects.component';
import { ResumeComponent } from './component/main-content/resume/resume.component';
import { SummaryComponent } from './component/main-content/summary/summary.component';

const routes: Routes = [
  { path: "", component: SummaryComponent },
  { path: "home", component: SummaryComponent },
  { path: "index", component: SummaryComponent },
  { path: "summary", component: SummaryComponent },
  { path: "resume", component: ResumeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
