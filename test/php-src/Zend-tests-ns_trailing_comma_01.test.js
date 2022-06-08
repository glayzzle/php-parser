// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_01.phpt
  it("Mixed group use declaration can contain trailing comma", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n  const FOO_CONST = \"Foo const\\n\";\n  function foo_func() {\n    echo \"Foo func\\n\";\n  }\n  class FooClass {\n    function __construct() {\n      echo \"Foo class\\n\";\n    }\n  }\n}\nnamespace {\n  use Foo\\{\n    const FOO_CONST,\n    function foo_func,\n    FooClass as BarClass,\n  };\n  echo FOO_CONST;\n  foo_func();\n  new BarClass;\n}\n?>")).toMatchSnapshot();
  });
});
