function hoist() {
  console.log(a);

  var a = 42;

  console.log(a);
}

hoist();