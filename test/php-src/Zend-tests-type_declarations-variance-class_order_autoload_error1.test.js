// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error1.phpt
  it("Variance error in the presence of autoloading (1)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    if ($class === 'A') {\n        class A {\n            public function method() : C {}\n        }\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method() : B {}\n        }\n    } else {\n        class C extends B {\n        }\n    }\n});\n$b = new B;\n?>")).toMatchSnapshot();
  });
});
