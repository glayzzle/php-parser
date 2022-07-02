// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40621.phpt
  it("Bug #40621 (Crash when constructor called inappropriately (statically))", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private function __construct() { }\n    function get() {\n        self::__construct();\n    }\n}\nFoo::get();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
