// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81631.phpt
  it("Bug #81631: ::class with dynamic class name may yield wrong line number", function () {
    expect(parser.parseCode("<?php\n$a = 0;\nvar_dump($b::class);\n?>")).toMatchSnapshot();
  });
});
