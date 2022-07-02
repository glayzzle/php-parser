// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_026.phpt
  it("026: Name ambiguity (class name & namespace name)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Foo {\n  function __construct() {\n    echo \"Method - \".__CLASS__.\"::\".__FUNCTION__.\"\\n\";\n  }\n  static function Bar() {\n    echo \"Method - \".__CLASS__.\"::\".__FUNCTION__.\"\\n\";\n  }\n}\nfunction Bar() {\n  echo \"Func   - \".__FUNCTION__.\"\\n\";\n}\n$x = new Foo;\n\\Foo\\Bar();\n$x = new \\Foo\\Foo;\n\\Foo\\Foo::Bar();\n\\Foo\\Bar();\nFoo\\Bar();\n?>")).toMatchSnapshot();
  });
});
