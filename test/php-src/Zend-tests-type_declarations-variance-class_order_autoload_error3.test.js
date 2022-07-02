// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error3.phpt
  it("Variance error in the presence of autoloading (3)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    if ($class == 'A') {\n        class A {\n            public function method(): X {}\n        }\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method(): Y {}\n        }\n    } else if ($class == 'X') {\n        class X {\n            public function method(): Q {}\n        }\n    } else if ($class == 'Y') {\n        class Y extends X {\n            public function method(): R {}\n        }\n    } else if ($class == 'Q') {\n        class Q {\n            public function method(): B {}\n        }\n    } else if ($class == 'R') {\n        class R extends Q {\n            public function method(): A {}\n        }\n    }\n});\n$b = new B;\n?>")).toMatchSnapshot();
  });
});
