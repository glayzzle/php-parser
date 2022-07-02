// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/alias-semantics.phpt
  it("Semantic of alias operation is to provide an additional identifier for the method body of the original method.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello {\n  public function a() {\n    echo 'A';\n  }\n}\nclass TraitsTest {\n    use THello { a as b; }\n}\n$test = new TraitsTest();\n$test->a();\n$test->b();\n?>")).toMatchSnapshot();
  });
});
