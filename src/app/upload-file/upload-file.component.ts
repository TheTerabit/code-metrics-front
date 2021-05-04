import {Component, OnInit} from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  current = 'calculate';
  filesToUpload: FileList;

  constructor(private service: RestapiService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filesToUpload = (target.files as FileList);
  }

  onSubmit() {
    if (this.filesToUpload === undefined) {
      this.toastr.error('Please select a file.');
      return;
    }
    this.service.postFiles(this.filesToUpload)
      .subscribe(
        data => {
          this.toastr.success('Files uploaded, your analysis will start soon!');
          this.router.navigate(['../results', data.projectId]);
        },
        () => this.toastr.error('Error occurred during file upload!'));
  }
}
