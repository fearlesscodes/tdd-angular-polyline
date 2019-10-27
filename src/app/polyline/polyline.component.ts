import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.component.html',
  styleUrls: ['./polyline.component.scss']
})
export class PolylineComponent implements OnInit {

  @Input()
  points: DOMPoint[] = [];

  @ViewChild('svg', { static: true })
  svg: ElementRef;

  @ViewChild('poly', { static: true })
  poly: ElementRef;

  constructor() { }

  ngOnInit() {
    const polyNativeElement: SVGPolylineElement = this.poly.nativeElement;
    const svgGenerator: SVGSVGElement = this.svg.nativeElement;
    this.points.forEach(point => {
      const svgPoint = svgGenerator.createSVGPoint();
      svgPoint.x = point.x;
      svgPoint.y = point.y;
      polyNativeElement.points.appendItem(svgPoint);
    });

  }

}
