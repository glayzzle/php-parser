// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60173.phpt
  it("Bug #60173 (Wrong error message on reflective trait instantiation)", function () {
    expect(parser.parseCode("<?php\ntrait foo { }\n$rc = new ReflectionClass('foo');\n$rc->newInstance();\n?>")).toMatchSnapshot();
  });
});
