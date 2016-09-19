const obj = {
  ctx() {
    console.log(this);
  },
  name: 'demo object'
};

obj.ctx(); // -> ???