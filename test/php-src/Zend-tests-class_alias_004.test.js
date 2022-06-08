// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_004.phpt
  it("Testing creation of alias using an existing interface name", function () {
    expect(parser.parseCode("<?php\nclass foo { }\ninterface test { }\nclass_alias('foo', 'test');\n?>")).toMatchSnapshot();
  });
});
