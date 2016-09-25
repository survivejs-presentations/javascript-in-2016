function queue (len) {
  const ret = [];

  // ret.push = arr => { - won't work, why?
  ret.push = function push (arr) {
    if(ret.length == len) {
      ret.shift();
    }

    return Array.prototype.push.call(this, arr);
  };

  return ret;
}

const a = queue(2);

a.push('cat');
a.push('dog');
a.push('chimp');

console.log(a); // should contain dog, chimp now