var consoler = require('../index'),
    should = require('should');

describe('Console', function() {
    it('should return a correct string', function() {
        var s = consoler('success','hello world');
        list.should.be.equal('vote@0.0.1 [ Success ] 123');
    });
});