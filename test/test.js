var consoler = require('../index'),
    should = require('should');

describe('Console', function() {
    it('should return a correct string', function() {
        consoler('success','hello world');
    });
    it('should return a correct string', function() {
        consoler('plain info');
    });
});