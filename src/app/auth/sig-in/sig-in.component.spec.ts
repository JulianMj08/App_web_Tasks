import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigInComponent } from './sig-in.component';

describe('SigInComponent', () => {
  let component: SigInComponent;
  let fixture: ComponentFixture<SigInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigInComponent]
    });
    fixture = TestBed.createComponent(SigInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
