import { Component, OnInit } from '@angular/core';
import {ResultComponent} from '../ResultComponent';

@Component({
  selector: 'app-methods-result',
  templateUrl: './methods-result.component.html',
  styleUrls: ['./methods-result.component.css']
})
export class MethodsResultComponent implements OnInit, ResultComponent {
  data: any;

  ngOnInit(): void {
    console.log('Methods\' metrics loaded');
  }
}
