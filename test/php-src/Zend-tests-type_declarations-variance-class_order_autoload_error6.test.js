// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error6.phpt
  it("Variance error in the presence of autoloading (6)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    if ($class == 'A') {\n        class A {\n            public function method(): X {}\n        }\n        var_dump(new A);\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method(): Y {}\n        }\n        var_dump(new B);\n    } else if ($class == 'X') {\n        class X {\n            public function method(): X {}\n        }\n        var_dump(new X);\n    } else if ($class == 'Y') {\n        class Y extends X {\n            public function method(): Unknown {}\n        }\n        var_dump(new Y);\n    }\n});\nvar_dump(new B);\n?>")).toMatchSnapshot();
  });
});
