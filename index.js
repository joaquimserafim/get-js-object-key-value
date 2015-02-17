'use strict';

module.exports = getKeyValue;

function getKeyValue(obj) {
  var res = [];
  Object.keys(obj).forEach(function(key) {
    res.push({key: key, value: obj[key]});
  });
  return res.length > 1 ? res : res[0];
}
