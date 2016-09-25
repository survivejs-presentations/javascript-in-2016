function hoist () {
  console.log(a);

  // try replacing with let
  var a = 42;

  console.log(a);
}

hoist();