import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BannerComponent} from './banner/banner.component';
import {SideNavbarComponent} from './side-navbar/side-navbar.component';
import {RouterModule} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {RestapiService} from './restapi.service';
import {FormsModule} from '@angular/forms';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {AboutMetricsComponent} from './about-metrics/about-metrics.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResultsComponent } from './results/results.component';
import { ResultsDirective } from './directives/results.directive';
import { MethodsResultComponent } from './results/methods-result/methods-result.component';
import { FieldsResultComponent } from './results/fields-result/fields-result.component';
import { CyclomaticComplexityResultComponent } from './results/cyclomatic-complexity-result/cyclomatic-complexity-result.component';
import { LinesOfCodeResultComponent } from './results/lines-of-code-result/lines-of-code-result.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SideNavbarComponent,
    ContentComponent,
    UploadFileComponent,
    AboutMetricsComponent,
    ResultsComponent,
    ResultsDirective,
    MethodsResultComponent,
    FieldsResultComponent,
    CyclomaticComplexityResultComponent,
    LinesOfCodeResultComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ContentComponent},
      {path: 'calculate', component: UploadFileComponent},
      {path: 'about-metrics', component: AboutMetricsComponent}
    ])
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
