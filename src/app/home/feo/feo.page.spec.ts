import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeoPage } from './feo.page';

describe('FeoPage', () => {
  let component: FeoPage;
  let fixture: ComponentFixture<FeoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
