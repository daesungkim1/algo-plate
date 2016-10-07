
import { expect } from 'chai';
import fs from 'fs';

// target
import binarySearch from '../src/binary_search/binary_search.js';
import lowerBound from '../src/binary_search/lower_bound.js';
import upperBound from '../src/binary_search/upper_bound.js';

// read fixture from json
const fixture =
    JSON.parse(fs.readFileSync('./data/binary_search.json', 'utf8'));

const tests = fixture.tests;

let tc1 = {};
let tc2 = {};
let tc3 = {};

// extract tests
tests.forEach((test) => {
  if (test.type === 'match') {
    tc1 = test;
  } else if (test.type === 'lower-bound') {
    tc2 = test;
  } else if (test.type === 'upper-bound') {
    tc3 = test;
  }
});

describe('BinarySearch', () => {

  describe('search match', () => {
    const results = tc1.results;
    results.forEach((test) => {

      it(`look for ${test.input}, expected result is ${test.expected}`, () => {
        const result = binarySearch({
          s: 0,
          e: fixture.testcases[test.ref].case.length,
          k: test.input,
          A: fixture.testcases[test.ref].case,
        });
        expect(result).to.be.equal(test.expected);
      });

    });
  });

  describe('search lowerbound', () => {
    const results = tc2.results;
    results.forEach((test) => {

      it(`look for ${test.input}, expected result is ${test.expected}`, () => {
        const result = lowerBound({
          s: 0,
          e: fixture.testcases[test.ref].case.length,
          k: test.input,
          A: fixture.testcases[test.ref].case,
        });
        expect(result).to.be.equal(test.expected);
      });

    });
  });

  describe('search upperbound', () => {
    const results = tc3.results;
    results.forEach((test) => {

      it(`look for ${test.input}, expected result is ${test.expected}`, () => {
        const result = upperBound({
          s: 0,
          e: fixture.testcases[test.ref].case.length,
          k: test.input,
          A: fixture.testcases[test.ref].case,
        });
        expect(result).to.be.equal(test.expected);
      });

    });
  });

});
