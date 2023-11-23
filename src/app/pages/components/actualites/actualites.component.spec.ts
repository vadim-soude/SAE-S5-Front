import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesComponent } from './actualites.component';

describe('ProjectsComponent', () => {
  let component: ActualitesComponent;
  let fixture: ComponentFixture<ActualitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualitesComponent]
    });
    fixture = TestBed.createComponent(ActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
