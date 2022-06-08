// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_by_reference_optimization.phpt
  it("Make sure optimization does not interfere with yield by ref", function () {
    expect(parser.parseCode("<?php\nfunction &gen() {\n    yield $v = 0;\n    yield $v = 1;\n}\nforeach (gen() as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
