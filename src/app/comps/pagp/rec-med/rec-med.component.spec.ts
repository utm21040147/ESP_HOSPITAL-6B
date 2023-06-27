import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecMedComponent } from './rec-med.component';

describe('RecMedComponent', () => {
  let component: RecMedComponent;
  let fixture: ComponentFixture<RecMedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecMedComponent]
    });
    fixture = TestBed.createComponent(RecMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
