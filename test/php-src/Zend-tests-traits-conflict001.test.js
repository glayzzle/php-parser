// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/conflict001.phpt
  it("Method conflict in traits", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello1 {\n  private function hello() {\n    echo 'Hello';\n  }\n}\ntrait THello2 {\n  private function hello() {\n    echo 'Hello';\n  }\n}\nclass TraitsTest {\n    use THello1;\n    use THello2;\n}\n?>")).toMatchSnapshot();
  });
});
