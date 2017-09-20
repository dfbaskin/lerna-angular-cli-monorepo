import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFourComponent } from './example-four.component';

describe('ExampleFourComponent', () => {
  let component: ExampleFourComponent;
  let fixture: ComponentFixture<ExampleFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
