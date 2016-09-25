function powerGenerator () {
  let i = 0; // why const is not allowed?

  return {
    next() {
      const ret = Math.pow(i, 2);

      i++;

      return ret;
    }
  };
}

const gen = powerGenerator();
console.log(gen.next(), gen.next(), gen.next()); // -> 0 1 4