// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_054.phpt
  it("Closure 054: self::class in non-static closure in non-static method.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo() {\n        $f = function() {\n            return self::class;\n        };\n        return $f();\n    }\n}\nclass B extends A {}\n$b = new B;\nvar_dump($b->foo());\n?>")).toMatchSnapshot();
  });
});
