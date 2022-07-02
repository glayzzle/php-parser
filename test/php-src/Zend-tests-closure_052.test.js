// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_052.phpt
  it("Closure 052: static::class in non-static closure in static method.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() {\n        $f = function() {\n            return static::class;\n        };\n        return $f();\n    }\n}\nclass B extends A {}\nvar_dump(B::foo());\n?>")).toMatchSnapshot();
  });
});
