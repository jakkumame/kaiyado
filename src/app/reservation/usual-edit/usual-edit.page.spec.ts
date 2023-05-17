import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsualEditPage } from './usual-edit.page';

describe('UsualEditPage', () => {
  let component: UsualEditPage;
  let fixture: ComponentFixture<UsualEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsualEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
