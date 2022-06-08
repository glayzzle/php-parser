// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/013.phpt
  it("Closure inside method returned null, expected array", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function bar() : callable {\n        $test = \"one\";\n        return function() use($test) : array {\n            return null;\n        };\n    }\n}\n$baz = new foo();\nvar_dump($func=$baz->bar(), $func());\n?>")).toMatchSnapshot();
  });
});
