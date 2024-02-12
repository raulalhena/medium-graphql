import { sum, httpServer } from '../app';

describe('Unit testing', () => {
  afterAll(async () => {
    await httpServer.close();
  });
  
  it('Should return 2', async () => {
    await expect(sum(1, 1)).toBe(2);
  });
});