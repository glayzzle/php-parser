// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38624.phpt
  it("Bug #38624 (Strange warning when incrementing an object property and exception is thrown from __get method)", function () {
    expect(parser.parseCode("<?php\nclass impl\n{\n    public function __construct()\n    {\n       $this->counter++;\n    }\n    public function __set( $name, $value )\n    {\n        throw new Exception( \"doesn't work\" );\n    }\n    public function __get( $name )\n    {\n        throw new Exception( \"doesn't work\" );\n    }\n}\n$impl = new impl();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
