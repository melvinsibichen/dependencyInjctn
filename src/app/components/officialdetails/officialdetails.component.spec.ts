import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialdetailsComponent } from './officialdetails.component';

describe('OfficialdetailsComponent', () => {
  let component: OfficialdetailsComponent;
  let fixture: ComponentFixture<OfficialdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficialdetailsComponent]
    });
    fixture = TestBed.createComponent(OfficialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
