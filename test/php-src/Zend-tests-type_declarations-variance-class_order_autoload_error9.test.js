// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error9.phpt
  it("Inheritance failure because Y inherits from wrong class", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    if ($class == 'A') {\n        class A\n        {\n            function m(): B {}\n            function m2(): B {}\n        }\n        var_dump(new A);\n    } elseif ($class == 'B') {\n        class B extends A\n        {\n            function m(): X {}\n            function m2(): Y {}\n        }\n        var_dump(new B);\n    } elseif ($class == 'X') {\n        class X extends B {}\n        var_dump(new X);\n    } else {\n        class Y extends A {}\n        var_dump(new Y);\n    }\n});\nnew B;\n?>")).toMatchSnapshot();
  });
});
