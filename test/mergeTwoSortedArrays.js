/*global describe, it*/

var chai = require('chai');
var should = chai.should();
var mergeArrays = require('../algorithms/mergeTwoSortedArrays').mergeArrays;

describe('merge two sorted arrays', function () {
  it('shold return sorted array', function () {
    return mergeArrays([2,5,6,9], [1,2,3,29]).should.be.an('array').deep.equals([1, 2, 2, 3, 5, 6, 9, 29]);
  });
  it('shold return sorted array', function () {
    return mergeArrays([2,5,6,9], [1,2,3,29,30]).should.be.an('array').deep.equals([1, 2, 2, 3, 5, 6, 9, 29, 30]);
  });
  
  it('shold return sorted array', function () {
    return mergeArrays([2,5,6,9,30,31], [1,2,3,29]).should.be.an('array').deep.equals([1, 2, 2, 3, 5, 6, 9, 29, 30,31]);
  });
});