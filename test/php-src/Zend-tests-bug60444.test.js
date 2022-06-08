// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60444.phpt
  it("Bug #60444 (Segmentation fault with include & class extending)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __construct() {\n        eval(\"class Bar extends Foo {}\");\n        Some::foo($this);\n    }\n}\nclass Some {\n    public static function foo(Foo $foo) {\n    }\n}\nnew Foo;\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
