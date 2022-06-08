// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_056.phpt
  it("Closure 056: self::class in non-static closure in static method.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() {\n        $f = function() {\n            return self::class;\n        };\n        return $f();\n    }\n}\nclass B extends A {}\nvar_dump(B::foo());\n?>")).toMatchSnapshot();
  });
});
