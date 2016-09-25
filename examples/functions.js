// Destructuring
function map(cb, ...values) {
  return values.map(cb);
}
// map(cb, 1, 2, 3)

// Default values (ES6)
function map2(cb, values=[]) {
  return values.map(cb);
}
// map2(cb, [1, 2, 3])

// Regular destructuring in ES6, rest properties (stage 2).
const hello = ({ name, ...rest }) => {
  // ES6 string interpolation. Note the back-ticks!
  return `Hello ${name}. You are ${rest.age}!`;
};
// hello({ name: 'joe', age: 5 })
