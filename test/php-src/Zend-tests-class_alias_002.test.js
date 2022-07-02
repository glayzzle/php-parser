// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_002.phpt
  it("Trying redeclare class with class_alias()", function () {
    expect(parser.parseCode("<?php\nclass foo { }\nclass_alias('foo', 'FOO');\n?>")).toMatchSnapshot();
  });
});
