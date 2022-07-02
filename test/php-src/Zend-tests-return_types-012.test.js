// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/012.phpt
  it("Method returned callable, expected callable", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function bar() : callable {\n        $test = \"one\";\n        return function() use($test) : array {\n            return array($test);\n        };\n    }\n}\n$baz = new foo();\nvar_dump($baz->bar());\n?>")).toMatchSnapshot();
  });
});
