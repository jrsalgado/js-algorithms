/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var fibonacci = require('../algorithms/fibonacci').fibonacci;
var fibonacciRecursive = require('../algorithms/fibonacci').fibonacciRecursive;

describe('calulate fibonacci number', function () {
  it('should return a fibonacci number', function () {
    return fibonacci(12).should.be.a('number').equals(144);
  });
});

describe('calculate fibonacci number recursive', function () {
   it('should return a fibonacci number', function () {
    return fibonacci(12).should.be.a('number').equals(144);
  });
});