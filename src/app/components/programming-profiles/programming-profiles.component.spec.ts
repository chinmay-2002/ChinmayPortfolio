import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingProfilesComponent } from './programming-profiles.component';

describe('ProgrammingProfilesComponent', () => {
  let component: ProgrammingProfilesComponent;
  let fixture: ComponentFixture<ProgrammingProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgrammingProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammingProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
