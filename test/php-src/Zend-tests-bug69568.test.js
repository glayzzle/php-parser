// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69568.phpt
  it("Bug #69568: call a private function in closure failed", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private static function testprivate() {\n        return 1;\n    }\n    public static function test() {\n        return function() {\n            return self::testprivate();\n        };\n    }\n}\nclass B extends A {\n}\n$fn = B::test();\necho $fn();\n?>")).toMatchSnapshot();
  });
});
