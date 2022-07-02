// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/alias-semantics02.phpt
  it("Semantic of alias operation is to provide an additional identifier for the\nmethod body of the original method.\nIt should also work in case the method is fully qualified.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello {\n  public function a() {\n    echo 'A';\n  }\n}\nclass TraitsTest {\n    use THello { THello::a as b; }\n}\n$test = new TraitsTest();\n$test->a();\n$test->b();\n?>")).toMatchSnapshot();
  });
});
