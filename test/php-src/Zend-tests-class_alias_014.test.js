// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_014.phpt
  it("Testing creation of alias to class name without namespace prefix", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar {\n}\nclass_alias('bar', 'baz');\n?>")).toMatchSnapshot();
  });
});
