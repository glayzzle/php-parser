// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/property004.phpt
  it("Conflicting properties with different initial values are considered incompatible.", function () {
    expect(parser.parseCode("<?php\ntrait THello1 {\n  public $hello = \"foo\";\n}\ntrait THello2 {\n  private $hello = \"bar\";\n}\necho \"PRE-CLASS-GUARD\\n\";\nclass TraitsTest {\n    use THello1;\n    use THello2;\n    public function getHello() {\n        return $this->hello;\n    }\n}\n$t = new TraitsTest;\n?>")).toMatchSnapshot();
  });
});
