'use strict';

var Lab   = require('lab');
var Code  = require('code');

var getKeyValue = require('./');

var lab = module.exports.lab = Lab.script();

var describe  = lab.describe;
var it        = lab.it;
var expect    = Code.expect;

describe('get keys & values', function() {
  it('should return a single object', function(done) {
    var obj = {a: 1};
    expect(getKeyValue(obj)).to.be.an.object();
    expect(getKeyValue(obj).key).to.be.equal('a');
    expect(getKeyValue(obj).value).to.be.equal(1);
    done();
  });

  it('should return an array', function(done) {
    var scripts = require('./package.json').scripts;
    var arr = getKeyValue(scripts);
    expect(arr).to.be.an.array();
    done();
  });

  it('passing an empty object', function(done) {
    var arr = getKeyValue({});
    expect(arr).to.be.undefined();
    done();
  });

  it('passing an empty object should throw', function(done) {
    var throws = function() {
      getKeyValue();
    };
    expect(throws).to.throw();
    done();
  });
});
