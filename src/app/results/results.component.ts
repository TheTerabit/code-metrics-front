import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RestapiService} from '../restapi.service';
import {ActivatedRoute} from '@angular/router';
import {Result, Results} from '../model/Results';
import {ResultsDirective} from '../directives/results.directive';
import {ResultComponent} from './ResultComponent';
import {MethodsResultComponent} from './methods-result/methods-result.component';
import {FieldsResultComponent} from './fields-result/fields-result.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  current = 'calculate';
  id: number;
  @ViewChild(ResultsDirective, {static: true}) resultsHost: ResultsDirective;
  constructor(private service: RestapiService,
              private route: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.service.getResultsForProject(this.id).subscribe(data => {
      const results = new Results();
      results.metricMethods = new Result(MethodsResultComponent, data.metricMethodsResponse);
      results.metricFields = new Result(FieldsResultComponent, data.metricFieldsResponse);
      this.showMetricResults(results);
    });
  }

  private showMetricResults(results: Results) {
    const viewContainerRef = this.resultsHost.viewContainerRef;
    viewContainerRef.clear();
    this.showMetricsResult(viewContainerRef, results.metricMethods);
    this.showMetricsResult(viewContainerRef, results.metricFields);
  }

  private showMetricsResult(viewContainerRef: ViewContainerRef, metricResult: Result) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(metricResult.component);

    const componentRef = viewContainerRef.createComponent<ResultComponent>(componentFactory);
    componentRef.instance.data = metricResult.data;
  }
}
