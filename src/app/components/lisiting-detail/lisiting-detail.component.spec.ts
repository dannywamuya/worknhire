import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisitingDetailComponent } from './lisiting-detail.component';

describe('LisitingDetailComponent', () => {
  let component: LisitingDetailComponent;
  let fixture: ComponentFixture<LisitingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisitingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisitingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
