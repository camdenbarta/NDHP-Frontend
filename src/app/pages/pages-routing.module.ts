import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PolicyPositionsComponent } from './policy-positions/policy-positions.component';

const routes: Routes = [
  { path: 'api', component: HomeComponent},
  { path: 'api/about', component: AboutComponent},
  { path: 'api/archive', component: ArchiveComponent},
  { path: 'api/contact', component:ContactComponent},
  { path: 'api/meet-members', component: MembersComponent},
  { path: 'api/news-letters', component: NewslettersComponent},
  { path: 'api/policy-positions', component: PolicyPositionsComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
