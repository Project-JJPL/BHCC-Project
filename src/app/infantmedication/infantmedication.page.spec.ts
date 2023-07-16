import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfantmedicationPage } from './infantmedication.page';

describe('InfantmedicationPage', () => {
  let component: InfantmedicationPage;
  let fixture: ComponentFixture<InfantmedicationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfantmedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
