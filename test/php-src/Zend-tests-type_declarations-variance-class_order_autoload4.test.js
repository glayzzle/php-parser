// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload4.phpt
  it("Class order allowed with autoloading (4)", function () {
    expect(parser.parseCode("<?php\n// Same as autoload3 test case, but with X, Y being interfaces.\nspl_autoload_register(function($class) {\n    if ($class == 'A') {\n        class A {\n            public function method(): X {}\n        }\n        var_dump(new A);\n    } else if ($class == 'B') {\n        class B extends A {\n            public function method(): Y {}\n        }\n        var_dump(new B);\n    } else if ($class == 'X') {\n        interface X {\n            public function method(): A;\n        }\n        var_dump(interface_exists('X'));\n    } else if ($class == 'Y') {\n        interface Y extends X {\n            public function method(): B;\n        }\n        var_dump(interface_exists('Y'));\n    }\n});\nvar_dump(new B);\n?>")).toMatchSnapshot();
  });
});
