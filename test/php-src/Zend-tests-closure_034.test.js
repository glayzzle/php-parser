// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_034.phpt
  it("Closure 033: Recursive var_dump on closures", function () {
    expect(parser.parseCode("<?php\n$a = function () use(&$a) {};\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
