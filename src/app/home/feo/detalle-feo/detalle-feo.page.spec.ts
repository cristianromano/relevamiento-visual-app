import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleFeoPage } from './detalle-feo.page';

describe('DetalleFeoPage', () => {
  let component: DetalleFeoPage;
  let fixture: ComponentFixture<DetalleFeoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleFeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
