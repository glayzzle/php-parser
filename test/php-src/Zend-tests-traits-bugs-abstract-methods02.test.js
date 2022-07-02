// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/abstract-methods02.phpt
  it("Abstract Trait Methods should behave like common abstract methods.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello {\n  public abstract function hello();\n}\ntrait THelloImpl {\n  public function hello() {\n    echo 'Hello';\n  }\n}\nclass TraitsTest {\n    use THello;\n    use THelloImpl;\n}\n$test = new TraitsTest();\n$test->hello();\n?>")).toMatchSnapshot();
  });
});
