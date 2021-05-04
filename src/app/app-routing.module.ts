import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
  {path: 'calculate', component: UploadFileComponent},
  {path: 'results/:id', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
