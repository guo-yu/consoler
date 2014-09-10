var consoler = require('../index');
var should = require('should');

describe('Console', function() {
  it('should return a correct string', function() {
    consoler('success', 'hello world');
    consoler.success('success');
  });
  it('should return a correct string', function() {
    consoler('plain info');
  });
});

describe('Add', function() {
  it('should return a correct string', function() {
    var result = consoler.add('new', 'green');
    result['new'].should.be.equal('green');
  });
});
