import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchComponent } from './shearch.component';

describe('ShearchComponent', () => {
  let component: ShearchComponent;
  let fixture: ComponentFixture<ShearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
