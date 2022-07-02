// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/abstract-methods05.phpt
  it("The compatibility with the signature of abstract methods should be checked.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THelloB {\n  public function hello() {\n    echo 'Hello';\n  }\n}\ntrait THelloA {\n  public abstract function hello($a);\n}\nclass TraitsTest1 {\n    use THelloB;\n    use THelloA;\n}\n?>")).toMatchSnapshot();
  });
});
