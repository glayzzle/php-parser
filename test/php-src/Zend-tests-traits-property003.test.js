// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/property003.phpt
  it("Conflicting properties with different visibility modifiers should result in a fatal error, since this indicates that the code is incompatible.", function () {
    expect(parser.parseCode("<?php\ntrait THello1 {\n  public $hello;\n}\ntrait THello2 {\n  private $hello;\n}\necho \"PRE-CLASS-GUARD\\n\";\nclass TraitsTest {\n    use THello1;\n    use THello2;\n}\necho \"POST-CLASS-GUARD\\n\";\n$t = new TraitsTest;\n$t->hello = \"foo\";\n?>")).toMatchSnapshot();
  });
});
