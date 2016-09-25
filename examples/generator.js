function numberGenerator () {
  return {
    next() {
      return 42;
    }
  };
}

var gen = numberGenerator();
console.log(gen.next(), gen.next()); // -> 42 42