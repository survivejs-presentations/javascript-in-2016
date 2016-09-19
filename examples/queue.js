function queue(len) {
  var ret = [];

  ret.push = function(arr) {
    if(ret.length == len) {
      ret.shift();
    }

    return Array.prototype.push.call(this, arr);
  };

  return ret;
}

var a = queue(2);

a.push('cat');
a.push('dog');
a.push('chimp');

console.log(a); // should contain dog, chimp now