import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../ResultComponent';

@Component({
  selector: 'app-cyclomatic-complexity-result',
  templateUrl: './cyclomatic-complexity-result.component.html',
  styleUrls: ['./cyclomatic-complexity-result.component.css']
})
export class CyclomaticComplexityResultComponent implements OnInit, ResultComponent {
  data: any;

  ngOnInit(): void {
    console.log('Cyclomatic Complexity\' metrics loaded');
  }
}
