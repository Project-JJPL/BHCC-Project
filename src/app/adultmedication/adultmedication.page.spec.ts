import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdultmedicationPage } from './adultmedication.page';

describe('AdultmedicationPage', () => {
  let component: AdultmedicationPage;
  let fixture: ComponentFixture<AdultmedicationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdultmedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
