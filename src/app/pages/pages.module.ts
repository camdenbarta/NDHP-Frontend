import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { PolicyPositionsComponent } from './policy-positions/policy-positions.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from 'src/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SafePipe } from './safe.pipe';
import { Img_VidComponent } from './img-vid/img_vid.component';
import { News2021Component } from './news2021/news2021.component';
import { News2022Component } from './news2022/news2022.component';
import { News2023Component } from './news2023/news2023.component';


@NgModule({
  declarations: [
    AboutComponent, 
    ArchiveComponent, 
    ContactComponent, 
    MembersComponent, 
    NewslettersComponent, 
    PolicyPositionsComponent, 
    HomeComponent, 
    NotFoundComponent,
    SafePipe,
    Img_VidComponent,
    News2021Component,
    News2022Component,
    News2023Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
