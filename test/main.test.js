import {expect} from 'chai';
import  {computed} from '../src/main';

describe('computed', () => {
  it('should return the computed input', () => {
    expect(computed([
    	[0,0,0],
    	[0,0,0],
    	[0,0,0]
    	]).toString()).equal('0,0,0,0,0,0,0,0,0');
  });
  it('should return the computed input', () => {
    expect(computed([
    	[0,0,0],
    	[0,0,0],
    	[0,1,0],
    	[0,1,1]
    	]).toString()).equal('0,0,0,0,0,0,0,1,1,0,1,1');
  });
  it('should return the computed input', () => {
    expect(computed([
    	[1,1,1,1,1],
    	[1,0,0,0,1],
    	[1,0,0,0,1],
    	[1,0,0,0,1],
    	[1,1,1,1,1]
    	]).toString()).equal("1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1");
  });    
});
