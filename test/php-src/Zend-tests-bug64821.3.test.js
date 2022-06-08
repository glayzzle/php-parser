// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64821.3.phpt
  it("Bug #64821 Custom Exceptions crash when internal properties overridden (variation 3)", function () {
    expect(parser.parseCode("<?php\nclass a extends exception {\n    public function __construct() {\n        $this->line = 0;\n        $this->file = \"\";\n    }\n}\nthrow new a;\n?>")).toMatchSnapshot();
  });
});
