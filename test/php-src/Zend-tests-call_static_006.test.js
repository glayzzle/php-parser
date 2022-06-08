// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_static_006.phpt
  it("Testing __callStatic", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static function __callstatic($a, $b) {\n        var_dump($a);\n    }\n}\nfoo::__construct();\n?>")).toMatchSnapshot();
  });
});
