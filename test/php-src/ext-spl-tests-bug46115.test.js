// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46115.phpt
  it("Bug #46115 (Memory leak when calling a method using Reflection)", function () {
    expect(parser.parseCode("<?php\n$h = new RecursiveArrayIterator(array());\n$x = new reflectionmethod('RecursiveArrayIterator', 'asort');\n$z = $x->invoke($h);\n?>\nDONE")).toMatchSnapshot();
  });
});
