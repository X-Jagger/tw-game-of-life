import {expect} from 'chai';
import {fizzBuzz} from '../src/fizzBuzz';

describe('Test Fizz Buzz', () => {
  it('should return a given number as a string', () => {
    expect(fizzBuzz(1)).to.equal('1');
  });

  it('should return FIZZ given number can be divided by 3', () => {
    expect(fizzBuzz(3)).to.equal('FIZZ');
    expect(fizzBuzz(6)).to.equal('FIZZ');
    expect(fizzBuzz(9)).to.equal('FIZZ');
  });

  it('should return BUZZ given number can be divided by 5', () => {
    expect(fizzBuzz(5)).to.equal('BUZZ');
    expect(fizzBuzz(10)).to.equal('BUZZ');
    expect(fizzBuzz(25)).to.equal('BUZZ');
  });

  it('should return FIZZBUZZ given number can be divided by both 3 and 5', () => {
    expect(fizzBuzz(15)).to.equal('FIZZBUZZ');
    expect(fizzBuzz(45)).to.equal('FIZZBUZZ');
    expect(fizzBuzz(75)).to.equal('FIZZBUZZ');
  });

});
