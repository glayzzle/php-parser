// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_reference_this.phpt
  it("Indirect referenced $this", function () {
    expect(parser.parseCode("<?php\nclass X {\n  function f($x){var_dump($$x);}\n}\n$x = new X;\n$x->f(\"this\");\n?>")).toMatchSnapshot();
  });
});
