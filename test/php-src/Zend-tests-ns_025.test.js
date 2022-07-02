// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_025.phpt
  it("025: Name ambiguity (class name & part of namespace name)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar;\nclass Foo {\n  function __construct() {\n    echo __CLASS__,\"\\n\";\n  }\n  static function Bar() {\n    echo __CLASS__,\"\\n\";\n  }\n}\n$x = new Foo;\nFoo::Bar();\n$x = new \\Foo\\Bar\\Foo;\n\\Foo\\Bar\\Foo::Bar();\n?>")).toMatchSnapshot();
  });
});
