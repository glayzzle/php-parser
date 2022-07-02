// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_078.phpt
  it("002: Import - different syntaxes", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Foo {\n  static function bar() {\n    echo __CLASS__,\"\\n\";\n  }\n}\nclass Foo2 {\n  static function bar() {\n    echo __CLASS__,\"\\n\";\n  }\n}\nnamespace xyz;\nuse test\\ns1\\Foo;\nuse test\\ns1\\Foo as Bar;\nuse \\test\\ns1\\Foo2;\nuse \\test\\ns1\\Foo2 as Bar2;\nFoo::bar();\nBar::bar();\nFoo2::bar();\nBar2::bar();\n?>")).toMatchSnapshot();
  });
});
