var t = require('u-test'),
    assert = require('assert'),
    gon = require('../main.js');

t('It works',function*(){
  var g = gon();

  g.subarray(1,3).set([1,2]);
  g[0] = 5;
  g.sort();

  assert.deepEqual(
    Array.from(gon.apply(
      new Uint8Array([0,7,8,3,4,0]),
      g
    )),
    [0,1,2,3,4,5]
  );
});
