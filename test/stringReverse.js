/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var reverse = require('../algorithms/stringReverse').reverse;

describe('string reverse', function () {
  it('should return the reversed string', function () {
    var str = "reverse this string";
    return reverse(str).should.be.a('string').equals("gnirts siht esrever");
  });
  it('should return the reversed string', function () {
    var str = "a  ";
    return reverse(str).should.be.a('string').equals("  a");
  });
  
});