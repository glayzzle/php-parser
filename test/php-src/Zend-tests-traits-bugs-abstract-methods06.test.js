// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/abstract-methods06.phpt
  it("The compatibility with the signature of abstract methods should be checked. (also checking the second possible implementation branch)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THelloB {\n  public function hello() {\n    echo 'Hello';\n  }\n}\ntrait THelloA {\n  public abstract function hello($a);\n}\nclass TraitsTest1 {\n    use THelloA;\n    use THelloB;\n}\n?>")).toMatchSnapshot();
  });
});
