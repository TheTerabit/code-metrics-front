import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-metrics',
  templateUrl: './about-metrics.component.html',
  styleUrls: ['./about-metrics.component.css']
})
export class AboutMetricsComponent implements OnInit {

  current: string = "about-metrics";

  constructor() { }

  ngOnInit(): void {
  }

}
