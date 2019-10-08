import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolylineComponent } from './polyline.component';

describe('PolylineComponent', () => {
  let component: PolylineComponent;
  let fixture: ComponentFixture<PolylineComponent>;
  let svgDebugElement: SVGElement;
  let polylineDebugElement: SVGPolylineElement;

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
    svgDebugElement = component.svg;
    polylineDebugElement = component.poly;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contain a svg and polyline element', () => {
    expect(svgDebugElement).toBeDefined();
  });
});
