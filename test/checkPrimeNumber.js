/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var isPrime = require('../algorithms/checkPrimeNumber').isPrime;

describe('check Prime number', function () {
  it('should return true', function () {
    return isPrime(137).should.be.true;
  });
  it('should return false', function () {
    return isPrime(22).should.be.false;
  });
});