/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var isPrime = require('../algorithms/checkPrimeNumber').isPrime;
var isPrime2 = require('../algorithms/checkPrimeNumber').isPrime2;

describe('check Prime number', function () {
  it('should return true', function () {
    return isPrime(137).should.be.true;
  });
  it('should return false', function () {
    return isPrime(237).should.be.false;
  });
});
describe('better solution check Prime number', function () {
  it('should return true', function () {
    return isPrime2(137).should.be.true;
  });
  it('should return false', function () {
    return isPrime2(237).should.be.false;
  });
});