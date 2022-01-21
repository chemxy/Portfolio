import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStacksComponent } from './tech-stacks.component';

describe('TechStacksComponent', () => {
  let component: TechStacksComponent;
  let fixture: ComponentFixture<TechStacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
