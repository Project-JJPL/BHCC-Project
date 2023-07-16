import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientInfoPage } from './patient-info.page';

describe('PatientInfoPage', () => {
  let component: PatientInfoPage;
  let fixture: ComponentFixture<PatientInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
