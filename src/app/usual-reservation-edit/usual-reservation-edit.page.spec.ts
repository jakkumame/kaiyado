import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsualReservationEditPage } from './usual-reservation-edit.page';

describe('UsualReservationEditPage', () => {
  let component: UsualReservationEditPage;
  let fixture: ComponentFixture<UsualReservationEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsualReservationEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
