import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.component.html',
  styleUrls: ['./polyline.component.scss']
})
export class PolylineComponent implements OnInit {

  @ViewChild('svg', { static: true })
  svg: SVGElement;

  constructor() { }

  ngOnInit() {
  }

}
