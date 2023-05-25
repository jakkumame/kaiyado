import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsualReservePage } from './usual-reserve.page';

describe('UsualReservePage', () => {
  let component: UsualReservePage;
  let fixture: ComponentFixture<UsualReservePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsualReservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
