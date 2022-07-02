// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_055.phpt
  it("Closure 055: self::class in static closure in static method.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() {\n        $f = static function() {\n            return self::class;\n        };\n        return $f();\n    }\n}\nclass B extends A {}\nvar_dump(B::foo());\n?>")).toMatchSnapshot();
  });
});
