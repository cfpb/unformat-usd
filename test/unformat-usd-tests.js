var unFormatUSD = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.formatUSD = {
  setUp: function(done) {
    // setup here
    done();
  },
  'Strip dollar sign': function(test) {
    test.strictEqual( unFormatUSD('$123'), 123 );
    test.strictEqual( unFormatUSD('$123.4'), 123.4 );
    test.strictEqual( unFormatUSD('$123.45'), 123.45 );
    test.strictEqual( unFormatUSD('$123.456'), 123.456 );
    test.done();
  },
  'Deal with extraneous characters': function(test) {
    test.strictEqual( unFormatUSD('$%123'), 123 );
    test.strictEqual( unFormatUSD('123.45.67'), 123.45 );
    test.strictEqual( unFormatUSD('79aaasdfa69s89'), 796989 );
    test.done();
  },
  'Ignore non-parseable strings': function(test) {
    var obj = {"foo":"bar"},
        func = function(a){return a};
    test.strictEqual( unFormatUSD('blah'), 'blah' );
    test.strictEqual( unFormatUSD(obj), obj );
    test.strictEqual( unFormatUSD(func), func );
    test.strictEqual( unFormatUSD(Date), Date );
    test.done();
  }
};
