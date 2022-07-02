// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/throw_not_an_exception.phpt
  it("Generator::throw() with something that's not an exception", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n}\n$gen = gen();\n$gen->throw(new stdClass);\n?>")).toMatchSnapshot();
  });
});
