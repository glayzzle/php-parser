// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_static_004.phpt
  it("Invalid method name in dynamic static call", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static function __callstatic($a, $b) {\n        var_dump($a);\n    }\n}\nfoo::AaA();\n$a = 1;\nfoo::$a();\n?>")).toMatchSnapshot();
  });
});
