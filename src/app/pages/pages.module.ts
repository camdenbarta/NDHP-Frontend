import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    SafePipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule
  ]
})
export class PagesModule { }
