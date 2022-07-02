// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_9.phpt
  it("Abstract method in trait using \"self\" (delayed obligation)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    if ($class == T::class) {\n        trait T {\n            abstract private function method($x): self;\n        }\n    } else if ($class == C::class) {\n        class C {\n            use T;\n            private function method($x): D {\n                return new D;\n            }\n        }\n    } else if ($class == D::class) {\n        class D extends C {}\n    }\n});\nnew C;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
