/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var swap = require('../algorithms/swapNumbersWithoutPivot').swap;

describe('swap numbers without pivot', function () {
  it('should return swaped numbers', function () {
    var a,b;
    a=3;
    b=2;
    return swap(a,b).should.be.an('object').to.include({a:2,b:3});
  });
  
  it('should return swaped numbers', function () {
    var a,b;
    a=6;
    b=2;
    return swap(a,b).should.be.an('object').to.include({a:2,b:6});
  });
  
  it('should return swaped numbers', function () {
    var a,b;
    a=4;
    b=10;
    return swap(a,b).should.be.an('object').to.include({a:10,b:4});
  });
  
});