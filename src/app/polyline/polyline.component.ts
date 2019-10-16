import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.component.html',
  styleUrls: ['./polyline.component.scss']
})
export class PolylineComponent implements OnInit {

  @Input()
  points: SVGPoint[] = [];

  @ViewChild('svg', { static: true })
  svg: ElementRef;

  @ViewChild('poly', { static: true })
  poly: ElementRef;

  constructor() { }

  ngOnInit() {
    const polyNativeElement: SVGPolylineElement = this.poly.nativeElement;
    this.points.forEach(point => {
      polyNativeElement.points.appendItem(point);
    });

  }

}
