const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Import the necessary helper functions
const { setupDOM } = require('./helpers.js');

// Array containing battery batches
const batteryBatches = [4, 5, 12, 10];

// Calculate the total number of assembled batteries using reduce()
const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

// Test suite using Mocha and Chai
const chai = require('chai');
const expect = chai.expect;

describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      expect(totalBatteries).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      expect(totalBatteries).to.eql(31);
    });
  });
});
