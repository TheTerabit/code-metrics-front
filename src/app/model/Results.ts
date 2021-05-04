import {Type} from '@angular/core';
import {ResultComponent} from '../results/ResultComponent';

export class Result {
  constructor(public component: Type<ResultComponent>, public data: any) {}
}

export class Results {
  metricMethods: Result;
  metricFields: Result;
  metricCyclomaticComplexity: Result;
  metricLineOfCode: Result;
}
