// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error2.phpt
  it("Variance error in the presence of autoloading (2)", function () {
    expect(parser.parseCode("<?php\n// Same as autoload_error1, but for argument types.\nspl_autoload_register(function($class) {\n    if ($class === 'A') {\n        class A {\n            public function method(B $x) {}\n        }\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method(C $x) {}\n        }\n    } else {\n        class C extends B {\n        }\n    }\n});\n$b = new B;\n$c = new C;\n?>")).toMatchSnapshot();
  });
});
