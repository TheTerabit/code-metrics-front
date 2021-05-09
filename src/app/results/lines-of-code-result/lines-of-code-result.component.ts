import { Component, OnInit } from '@angular/core';
import { ResultComponent } from '../ResultComponent';

@Component({
  selector: 'app-lines-of-code-result',
  templateUrl: './lines-of-code-result.component.html',
  styleUrls: ['./lines-of-code-result.component.css']
})
export class LinesOfCodeResultComponent implements OnInit, ResultComponent {
  data: any;

  ngOnInit(): void {
    console.log('Lines of code\' metrics loaded');
  }
}
