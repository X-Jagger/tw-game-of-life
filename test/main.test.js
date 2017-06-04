import {expect} from 'chai';
import  {square} from '../src/main';

describe('computed', () => {
  it('should return the square of the input number', () => {
    expect(square([
    	[0,0,0],
    	[0,0,0],
    	[0,0,0]
    	]).toString()).equal('0,0,0,0,0,0,0,0,0');
  });
  it('should return the square of the input number', () => {
    expect(square([
    	[0,0,0],
    	[0,0,0],
    	[0,1,0],
    	[0,1,1]
    	]).toString()).equal('0,0,0,0,0,0,0,1,1,0,1,1');
  });
  it('should return the square of the input number', () => {
    expect(square([
    	[1,1,1,1,1],
    	[1,0,0,0,1],
    	[1,0,0,0,1],
    	[1,0,0,0,1],
    	[1,1,1,1,1]
    	]).toString()).equal("1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1");
  });    
});
