// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug51421.phpt
  it("Bug #51421 (Abstract __construct constructor argument list not enforced)", function () {
    expect(parser.parseCode("<?php\nclass ExampleClass {}\nabstract class TestInterface {\n    abstract public function __construct(ExampleClass $var);\n}\nclass Test extends TestInterface {\n    public function __construct() {}\n}\n?>")).toMatchSnapshot();
  });
});
