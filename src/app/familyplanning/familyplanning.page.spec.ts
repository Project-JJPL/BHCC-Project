import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamilyplanningPage } from './familyplanning.page';

describe('FamilyplanningPage', () => {
  let component: FamilyplanningPage;
  let fixture: ComponentFixture<FamilyplanningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FamilyplanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
