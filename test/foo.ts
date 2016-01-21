'use strict';

let HogeClass = require('../dist/hoge');
import assert from 'power-assert';

describe(
  'Hoge',
  function () {
    let hogeInstance = new HogeClass();
    it(
      'Add Success',
      function () {
        assert.deepEqual(hogeInstance.add(2, 3) , 5, 'Not Equal');
      }
    )
    it(
      'Add Fail',
      function () {
        assert.strictEqual(hogeInstance.add(2, -2) , 5, 'Not Equal');
      }
    )
    
  }
);