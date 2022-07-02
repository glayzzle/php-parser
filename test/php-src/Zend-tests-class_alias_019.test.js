// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_019.phpt
  it("Trying to redeclare class name in global scope inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass foo {\n}\nclass_alias(__NAMESPACE__ .'\\foo', 'foo');\nclass_alias('\\foo', 'foo');\n?>")).toMatchSnapshot();
  });
});
