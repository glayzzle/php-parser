// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_002.phpt
  it("002: Import in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Foo {\n  static function bar() {\n    echo __CLASS__,\"\\n\";\n  }\n}\nuse test\\ns1\\Foo as Bar;\nuse test\\ns1 as ns2;\nuse test\\ns1;\nFoo::bar();\n\\test\\ns1\\Foo::bar();\nBar::bar();\nns2\\Foo::bar();\nns1\\Foo::bar();\n?>")).toMatchSnapshot();
  });
});
