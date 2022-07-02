// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_017.phpt
  it("Testing alias with get_called_class() and get_class()", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __construct() {\n        echo get_called_class(), \"\\n\";\n    }\n    static public function test() {\n        echo get_class(), \"\\n\";\n    }\n}\nclass_alias('foo', 'bar');\nnew bar;\nclass baz extends bar {\n}\nnew baz;\nbaz::test();\nbar::test();\n?>")).toMatchSnapshot();
  });
});
