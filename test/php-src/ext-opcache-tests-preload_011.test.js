// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_011.phpt
  it("Argument/return types must be available for preloading", function () {
    expect(parser.parseCode("<?php\ninterface K {}\ninterface L extends K {}\nrequire __DIR__ . '/preload_variance.inc';\n$a = new A;\n$b = new B;\n$d = new D;\n$f = new F;\n$g = new G;\n?>")).toMatchSnapshot();
  });
});
