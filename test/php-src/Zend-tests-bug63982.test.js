// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63982.phpt
  it("Bug #63982 (isset() inconsistently produces a fatal error on protected property)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n        protected $protectedProperty;\n}\n$test = new Test();\nvar_dump(isset($test->protectedProperty));\nvar_dump(isset($test->protectedProperty->foo));\n?>")).toMatchSnapshot();
  });
});
