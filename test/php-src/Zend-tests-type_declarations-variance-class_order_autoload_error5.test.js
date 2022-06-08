// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error5.phpt
  it("Variance error in the presence of autoloading (5)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    if ($class == 'A') {\n        class A {\n            public function method(): X {}\n        }\n        var_dump(new A);\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method(): Y {}\n        }\n        var_dump(new B);\n    } else if ($class == 'X') {\n        class X {\n            public function method(Y $a) {}\n        }\n        var_dump(new X);\n    } else if ($class == 'Y') {\n        class Y extends X {\n            public function method(Z $a) {}\n        }\n        var_dump(new Y);\n    } else if ($class == 'Z') {\n        class Z extends Y {\n            public function method($a) {}\n        }\n        var_dump(new Z);\n    }\n});\nvar_dump(new B);\n?>")).toMatchSnapshot();
  });
});
