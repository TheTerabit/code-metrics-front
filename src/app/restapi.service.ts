import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  baseUrl = 'https://code-metrics.azurewebsites.net/api/CodeMetrics';

  constructor(private httpClient: HttpClient) {
  }

  postFiles(filesToUpload: FileList): Observable<any> {
    const endpoint = this.baseUrl + '/UploadFiles';
    const formData: FormData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < filesToUpload.length; i++) {
      formData.append('files', filesToUpload[i]);
    }
    return this.httpClient.post(endpoint, formData);
  }

  getResultsForProject(id: number): Observable<any> {
    const endpoint = this.baseUrl + '/' + id;
    return this.httpClient.get(endpoint);
  }
}
