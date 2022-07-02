// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_005.phpt
  it("Testing static call method using the original class name", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static public function msg() {\n        print \"hello\\n\";\n    }\n}\ninterface test { }\nclass_alias('foo', 'baz');\nclass bar extends baz {\n    public function __construct() {\n        foo::msg();\n    }\n}\nnew bar;\n?>")).toMatchSnapshot();
  });
});
