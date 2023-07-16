import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MothermedicationPage } from './mothermedication.page';

describe('MothermedicationPage', () => {
  let component: MothermedicationPage;
  let fixture: ComponentFixture<MothermedicationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MothermedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
