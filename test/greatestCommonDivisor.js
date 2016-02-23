/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var euclides = require('../algorithms/gratestCommonDivisor').euclides;

describe('calulate greatest common divisor of two numbers', function () {
  it('should return greatest common divisor', function () {
    return euclides(14,21).should.be.a('number').equals(7);
  });
  
  it('should return greatest common divisor', function () {
    return euclides(21, 14).should.be.a('number').equals(7);
  });
});