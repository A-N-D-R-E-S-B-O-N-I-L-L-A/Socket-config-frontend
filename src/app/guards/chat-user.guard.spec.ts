import { TestBed } from '@angular/core/testing';

import { ChatUserGuard } from './chat-user.guard';

describe('ChatUserGuard', () => {
  let guard: ChatUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChatUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
