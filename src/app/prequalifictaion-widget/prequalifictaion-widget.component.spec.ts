import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequalifictaionWidgetComponent } from './prequalifictaion-widget.component';

describe('PrequalifictaionWidgetComponent', () => {
  let component: PrequalifictaionWidgetComponent;
  let fixture: ComponentFixture<PrequalifictaionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrequalifictaionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequalifictaionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
