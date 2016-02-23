/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var removeDuplicated = require('../algorithms/removeDuplicated').removeDuplicated;

describe('remove duplicated numbers', function () {
  it('shold return an Array of non duplicated numbers', function () {
    return removeDuplicated([1,3,3,3,1,5,6,7,8,1]).should.be.an('array').deep.equals([1, 3, 5, 6, 7, 8]);
  });
});