import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardsComponent } from './project-cards.component';

describe('ProjectCardsComponent', () => {
  let component: ProjectCardsComponent;
  let fixture: ComponentFixture<ProjectCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardsComponent]
    });
    fixture = TestBed.createComponent(ProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
