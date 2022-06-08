// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_027.phpt
  it("027: Name ambiguity (class name & part of extertnal namespace name)", function () {
    expect(parser.parseCode("<?php\nrequire \"ns_027.inc\";\nclass Foo {\n  function __construct() {\n    echo __CLASS__,\"\\n\";\n  }\n  static function Bar() {\n    echo __CLASS__,\"\\n\";\n  }\n}\n$x = new Foo;\nFoo::Bar();\n$x = new Foo\\Bar\\Foo;\nFoo\\Bar\\Foo::Bar();\n?>")).toMatchSnapshot();
  });
});
