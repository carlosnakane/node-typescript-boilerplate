import { sum } from '../math';

describe('Math', () => {
  it('Sum', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(1.5, 1.2)).toBe(2.7);
    expect(sum(2, -1)).toBe(1);
  });
});
