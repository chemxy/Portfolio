import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HighlightsComponent} from "./components/highlights/highlights.component";
import {SummaryComponent} from "./components/summary/summary.component";
import {ServicesComponent} from "./components/services/services.component";
import {SkillsComponent} from "./components/skills/skills.component";

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'about', component: HighlightsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
