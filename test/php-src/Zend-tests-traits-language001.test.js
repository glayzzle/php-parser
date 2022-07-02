// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language001.phpt
  it("Single Trait with simple trait method", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello {\n  public function hello() {\n    echo 'Hello';\n  }\n}\nclass TraitsTest {\n    use THello;\n}\n$test = new TraitsTest();\n$test->hello();\n?>")).toMatchSnapshot();
  });
});
