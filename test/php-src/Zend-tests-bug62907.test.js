// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62907.phpt
  it("Bug #62907 (Double free when use traits)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    if ($name == \"B\") {\n        eval (\"abstract class B extends A { }\");\n    } else if ($name == \"A\") {\n        eval (\"abstract class A { use T { T::__construct as __asconstruct; }}\");\n    } else if ($name == \"T\") {\n        eval (\"trait T { public function __construct() { } }\");\n    }\n    return TRUE;\n});\nclass C extends B {\n    public function __construct() {\n    }\n}\necho \"okey\";")).toMatchSnapshot();
  });
});
