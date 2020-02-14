import { TestBed } from '@angular/core/testing';

import { AddTodoService } from './add-todo.service';

describe('AddTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTodoService = TestBed.get(AddTodoService);
    expect(service).toBeTruthy();
  });
});
