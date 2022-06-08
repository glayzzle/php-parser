// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/yield_const_by_ref_error.phpt
  it("A notice is thrown when yielding a constant value by reference", function () {
    expect(parser.parseCode("<?php\nfunction &gen() {\n    yield \"foo\";\n}\n$gen = gen();\nvar_dump($gen->current());\n?>")).toMatchSnapshot();
  });
});
