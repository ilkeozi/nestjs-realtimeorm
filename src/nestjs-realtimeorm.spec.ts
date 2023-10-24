// TODO: add tests

import { add } from './nestjs-realtimeorm';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  })
})
