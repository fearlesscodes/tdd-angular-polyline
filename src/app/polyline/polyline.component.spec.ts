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
});
