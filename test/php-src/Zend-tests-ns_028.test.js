// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_028.phpt
  it("028: Name ambiguity (class name & external namespace name)", function () {
    expect(parser.parseCode("<?php\nrequire \"ns_028.inc\";\nclass Foo {\n  function __construct() {\n    echo \"Method - \".__CLASS__.\"::\".__FUNCTION__.\"\\n\";\n  }\n  static function Bar() {\n    echo \"Method - \".__CLASS__.\"::\".__FUNCTION__.\"\\n\";\n  }\n}\n$x = new Foo;\nFoo\\Bar();\n$x = new Foo\\Foo;\nFoo\\Foo::Bar();\n\\Foo\\Bar();\n?>")).toMatchSnapshot();
  });
});
