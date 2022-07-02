// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60536_002.phpt
  it("The same rules are applied for properties that are defined in the class hierarchy. Thus, if the properties are compatible, a notice is issued, if not a fatal error occurs. (relevant with #60536)", function () {
    expect(parser.parseCode("<?php\nclass Base {\n  private $hello;\n}\ntrait THello1 {\n  private $hello;\n}\necho \"PRE-CLASS-GUARD\\n\";\nclass Notice extends Base {\n    use THello1;\n    private $hello;\n}\necho \"POST-CLASS-GUARD\\n\";\n// now we do the test for a fatal error\nclass TraitsTest {\n    use THello1;\n    public $hello;\n}\necho \"POST-CLASS-GUARD2\\n\";\n$t = new TraitsTest;\n$t->hello = \"foo\";\n?>")).toMatchSnapshot();
  });
});
