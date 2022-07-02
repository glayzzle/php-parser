// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_069.phpt
  it("069: Include inside namespaced method", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass Test {\n  static function f() {\n    var_dump(__NAMESPACE__);\n    include __DIR__ . '/ns_069.inc';\n    var_dump(__NAMESPACE__);\n  }\n}\nTest::f();\n?>")).toMatchSnapshot();
  });
});
