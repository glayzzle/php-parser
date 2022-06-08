// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload5.phpt
  it("Class order allowed with autoloading (5)", function () {
    expect(parser.parseCode("<?php\n// Similar to variance3, but one more class hierarchy in the cycle\nspl_autoload_register(function($class) {\n    if ($class == 'A') {\n        class A {\n            public function method(): X {}\n        }\n        var_dump(new A);\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method(): Y {}\n        }\n        var_dump(new B);\n    } else if ($class == 'X') {\n        class X {\n            public function method(): Q {}\n        }\n        var_dump(new X);\n    } else if ($class == 'Y') {\n        class Y extends X {\n            public function method(): R {}\n        }\n        var_dump(new Y);\n    } else if ($class == 'Q') {\n        class Q {\n            public function method(): A {}\n        }\n        var_dump(new Q);\n    } else if ($class == 'R') {\n        class R extends Q {\n            public function method(): B {}\n        }\n        var_dump(new R);\n    }\n});\nvar_dump(new B);\n?>")).toMatchSnapshot();
  });
});
