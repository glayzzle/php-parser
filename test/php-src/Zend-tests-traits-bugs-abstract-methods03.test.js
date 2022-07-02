// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/abstract-methods03.phpt
  it("Abstract Trait Methods should behave like common abstract methods.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello {\n  public abstract function hello();\n}\nclass TraitsTest {\n  use THello;\n  public function hello() {\n    echo 'Hello';\n  }\n}\n$test = new TraitsTest();\n$test->hello();\n?>")).toMatchSnapshot();
  });
});
