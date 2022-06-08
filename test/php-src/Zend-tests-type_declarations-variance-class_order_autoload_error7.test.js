// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/class_order_autoload_error7.phpt
  it("Bug #78647: Outstanding dependency obligation", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    if ($class == 'A') {\n        class A {\n            function m(): B {}\n        }\n    } elseif ($class == 'B') {\n        class B extends A {\n            function m(): X {}\n        }\n    } else {\n        class C extends B {}\n    }\n});\nnew B;\n?>")).toMatchSnapshot();
  });
});
