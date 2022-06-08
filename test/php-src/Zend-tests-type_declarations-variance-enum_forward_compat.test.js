// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/enum_forward_compat.phpt
  it("Forward compatibility with types that look like classes but aren't", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    var_dump($class);\n    if ($class === 'X') {\n        class X {}\n    } else {\n        class Y {}\n    }\n});\nclass A {\n    public function method(X $param) : object {}\n}\nclass B extends A {\n    public function method(object $param) : Y {}\n}\n?>")).toMatchSnapshot();
  });
});
