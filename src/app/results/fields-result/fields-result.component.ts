import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../ResultComponent';

@Component({
  selector: 'app-fields-result',
  templateUrl: './fields-result.component.html',
  styleUrls: ['./fields-result.component.css']
})
export class FieldsResultComponent implements OnInit, ResultComponent {
  data: any;

  ngOnInit(): void {
    console.log('Fields\' metrics loaded');
  }
}
