import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appResultsDirective]'
})
export class ResultsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
