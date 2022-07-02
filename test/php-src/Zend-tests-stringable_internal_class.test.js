// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/stringable_internal_class.phpt
  it("Stringable should be automatically implemented for internal classes", function () {
    expect(parser.parseCode("<?php\n// _ZendTestClass defines __toString() but does not explicitly implement Stringable.\n$obj = new _ZendTestClass;\nvar_dump($obj instanceof Stringable);\n?>")).toMatchSnapshot();
  });
});
