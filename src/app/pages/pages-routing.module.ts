import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Img_VidComponent } from './img-vid/img_vid.component';
import { MembersComponent } from './members/members.component';
import { News2021Component } from './news2021/news2021.component';
import { News2022Component } from './news2022/news2022.component';
import { News2023Component } from './news2023/news2023.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PolicyPositionsComponent } from './policy-positions/policy-positions.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'archive', component: ArchiveComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'meet-members', component: MembersComponent},
  { path: 'news-letters', component: NewslettersComponent},
  { path: 'news-letters/2021', component: News2021Component},
  { path: 'news-letters/2022', component: News2022Component},
  { path: 'news-letters/2023', component: News2023Component},
  { path: 'policy-positions', component: PolicyPositionsComponent},
  { path: 'images', component: Img_VidComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
