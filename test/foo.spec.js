import {expect} from 'chai';
import {foo} from '../src/js/foo.js';

describe('Test Foo', () => {
    it('should return same value', () => {
        expect(foo('hello world!')).to.equal('hello world!');
    });
});


