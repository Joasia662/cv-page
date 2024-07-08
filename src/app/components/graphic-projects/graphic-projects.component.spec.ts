import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicProjectsComponent } from './graphic-projects.component';

describe('GraphicProjectsComponent', () => {
  let component: GraphicProjectsComponent;
  let fixture: ComponentFixture<GraphicProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicProjectsComponent]
    });
    fixture = TestBed.createComponent(GraphicProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
