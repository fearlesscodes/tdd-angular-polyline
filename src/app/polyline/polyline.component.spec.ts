import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolylineComponent } from './polyline.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('PolylineComponent', () => {
  let component: PolylineComponent;
  let fixture: ComponentFixture<PolylineComponent>;
  let svgDebugElement: DebugElement;
  let polylineDebugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    svgDebugElement = fixture.debugElement.query(By.css('svg'));
    polylineDebugElement = fixture.debugElement.query(By.css('polyline'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contain a svg and polyline element', () => {
    expect(svgDebugElement).toBeDefined();
    expect(polylineDebugElement).toBeDefined();
  });

  it('Expect number of points in the polyline element', () => {
    // Creating SVGPoints
    const svgPoints = [];
    const svg: SVGSVGElement = svgDebugElement.nativeElement
    const point1 = svg.createSVGPoint();
    point1.x = 100;
    point1.y = 100;
    const point2 = svg.createSVGPoint();
    point2.x = 100;
    point2.y = 100;
    svgPoints.push(point1, point2);
    component.points = svgPoints;
    const polyline: SVGPolylineElement = polylineDebugElement.nativeElement;
    // Important part of this test
    expect(polyline.points.length).toBe(2);
  });
});
