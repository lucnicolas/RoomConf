import { Room } from './room';

describe('Room', () => {
  it('should create an instance', () => {
    expect(new Room('Musk', false)).toBeTruthy();
  });
});
