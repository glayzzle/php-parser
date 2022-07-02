// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug55137.phpt
  it("Bug #55137 (Changing trait static method visibility)", function () {
    expect(parser.parseCode("<?php\ntrait A {\n   protected static function foo() { echo \"abc\\n\"; }\n   private static function bar() { echo \"def\\n\"; }\n}\nclass B {\n   use A {\n      A::foo as public;\n      A::bar as public baz;\n   }\n}\nB::foo();\nB::baz();\n?>")).toMatchSnapshot();
  });
});
