import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ITRPage } from './itr.page';

describe('ITRPage', () => {
  let component: ITRPage;
  let fixture: ComponentFixture<ITRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ITRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
