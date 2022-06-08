// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_02.phpt
  it("Unmixed group use declaration can contain trailing comma", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n  const FOO_CONST_1 = \"Foo const 1\\n\";\n  const FOO_CONST_2 = \"Foo const 2\\n\";\n}\nnamespace Bar {\n  function foo_func_1() {\n    echo \"Bar func 1\\n\";\n  }\n  function foo_func_2() {\n    echo \"Bar func 2\\n\";\n  }\n}\nnamespace Baz {\n  class BazFooClass {\n    function __construct() { echo \"BazFoo class\\n\"; }\n  }\n  class BazBarClass {\n    function __construct() { echo \"BazBar class\\n\"; }\n  }\n}\nnamespace {\n  use const Foo\\{\n    FOO_CONST_1,\n    FOO_CONST_2,\n  };\n  use function Bar\\{\n    foo_func_1,\n    foo_func_2,\n  };\n  use Baz\\{\n    BazFooClass,\n    BazBarClass,\n  };\n  echo FOO_CONST_1;\n  echo FOO_CONST_2;\n  foo_func_1();\n  foo_func_2();\n  new BazFooClass;\n  new BazBarClass;\n}\n?>")).toMatchSnapshot();
  });
});
