/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var primeFactors = require('../algorithms/primeFactors').primeFactors;

describe('calulate Prime Factors', function () {
  it('shold return an Array of factors', function () {
    return primeFactors(69).should.be.an('array').deep.equals([3,23]);
  });
});