// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug55372.phpt
  it("Bug #55372 (Literal handling in methods is inconsistent, causing memory corruption)", function () {
    expect(parser.parseCode("<?php\ntrait testTrait {\n    public function testMethod() {\n        if (1) {\n            $letters1 = range('a', 'z', 1);\n            $letters2 = range('A', 'Z', 1);\n            $letters1 = 'foo';\n            $letters2 = 'baarr';\n            var_dump($letters1);\n            var_dump($letters2);\n        }\n    }\n}\nclass foo {\n    use testTrait;\n}\n$x = new foo;\n$x->testMethod();\n?>")).toMatchSnapshot();
  });
});
