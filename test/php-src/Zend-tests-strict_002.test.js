// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/strict_002.phpt
  it("assigning static property as non static", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static $foo = 1;\n}\n$t = new test;\n$t->foo = 5;\n$fp = fopen(__FILE__, 'r');\nvar_dump($t);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
