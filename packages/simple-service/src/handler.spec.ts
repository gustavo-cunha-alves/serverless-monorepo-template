import {main} from './handler'

describe('test', () => {
  it('should', async () => {
    const result = await main()
    expect(result.statusCode).toBe(200);
  })})