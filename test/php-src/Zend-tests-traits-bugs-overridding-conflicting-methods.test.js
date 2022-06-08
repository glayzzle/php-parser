// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/overridding-conflicting-methods.phpt
  it("Overriding Conflicting Methods should not result in a notice/warning about collisions", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello1 {\n  public function hello() {\n    echo 'Hello';\n  }\n}\ntrait THello2 {\n  public function hello() {\n    echo 'Hello';\n  }\n}\nclass TraitsTest {\n  use THello1;\n  use THello2;\n  public function hello() {\n    echo 'Hello';\n  }\n}\n$test = new TraitsTest();\n$test->hello();\n?>")).toMatchSnapshot();
  });
});
