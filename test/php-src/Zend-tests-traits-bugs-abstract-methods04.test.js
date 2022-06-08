// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/abstract-methods04.phpt
  it("Abstract Trait Methods should behave like common abstract methods and\nimplementstion may be provided by other traits. Sorting order shouldn't influence result.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello {\n  public abstract function hello();\n}\ntrait THelloImpl {\n  public function hello() {\n    echo 'Hello';\n  }\n}\nclass TraitsTest1 {\n    use THello;\n    use THelloImpl;\n}\n$test = new TraitsTest1();\n$test->hello();\nclass TraitsTest2 {\n    use THelloImpl;\n    use THello;\n}\n$test = new TraitsTest2();\n$test->hello();\n?>")).toMatchSnapshot();
  });
});
