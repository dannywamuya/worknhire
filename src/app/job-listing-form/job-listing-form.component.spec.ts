import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingFormComponent } from './job-listing-form.component';

describe('JobListingFormComponent', () => {
  let component: JobListingFormComponent;
  let fixture: ComponentFixture<JobListingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
