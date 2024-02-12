
import { sum } from '../components/test';

describe('Unit testing', () => {
  it('Should return 2', () => {
    expect(sum(1,1)).toBe(2);
  });
});