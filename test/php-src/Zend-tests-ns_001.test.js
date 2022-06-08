// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_001.phpt
  it("001: Class in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Foo {\n  function __construct() {\n    echo __CLASS__,\"\\n\";\n  }\n  function bar() {\n    echo __CLASS__,\"\\n\";\n  }\n  static function baz() {\n    echo __CLASS__,\"\\n\";\n  }\n}\n$x = new Foo;\n$x->bar();\nFoo::baz();\n$y = new \\test\\ns1\\Foo;\n$y->bar();\n\\test\\ns1\\Foo::baz();\n?>")).toMatchSnapshot();
  });
});
