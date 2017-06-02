import {expect} from 'chai';
import  {square} from '../src/main';

describe('square', () => {
  it('should return the square of the input number', () => {
    expect(square(2)).equal(4);
  });
});
