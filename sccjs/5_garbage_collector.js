function foo() {
  quux = 23;
  var bar;

  function zip() {
    var quux = 5;
    bar = true;
  }

  return zip;
}
