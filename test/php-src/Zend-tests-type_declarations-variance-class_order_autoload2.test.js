// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload2.phpt
  it("Class order allowed with autoloading (2)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    if ($class === 'A') {\n        class A {\n            public function method() : B {}\n        }\n        var_dump(new A);\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method() : C {}\n        }\n        var_dump(new B);\n    } else {\n        class C extends B {\n        }\n        var_dump(new C);\n    }\n});\n// Same as autoload1 test case, but with a different autoloading root\nvar_dump(new B);\n?>")).toMatchSnapshot();
  });
});
