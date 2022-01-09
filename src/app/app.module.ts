import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { PagesModule } from './pages/pages.module';
import { ToolbarComponent } from './setup/toolbar/toolbar.component';
import { FooterComponent } from './setup/footer/footer.component';
import { HeaderComponent } from './setup/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from "@angular/material/icon";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpXSRFInterceptor } from '../app/HttpXSRFInterceptor'
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ScullyLibModule,
    PagesModule,
    NgbModule,
    MatIconModule,
    AngularSvgIconModule.forRoot(),
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpXSRFInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
