import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponentComponent } from './todos-component.component';

describe('TodosComponentComponent', () => {
  let component: TodosComponentComponent;
  let fixture: ComponentFixture<TodosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
