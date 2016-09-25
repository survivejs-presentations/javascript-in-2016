const obj = {
  ctx() {
    console.log(this);
  },
  name: 'demo object'
};

obj.ctx(); // -> ???
obj.ctx.apply({ a: 4 }); // -> ???
obj.ctx.bind({ b : 5 })(); // -> ???
