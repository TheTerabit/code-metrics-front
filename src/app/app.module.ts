import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AboutMetricsComponent } from './about-metrics/about-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SideNavbarComponent,
    ContentComponent,
    CategoryMenuComponent,
    UploadFileComponent,
    AboutMetricsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContentComponent},
      {path: 'calculate', component: UploadFileComponent},
      {path: 'about-metrics', component: AboutMetricsComponent},
      //{path: 'result/:id', component: ResultComponent},
    ])
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
