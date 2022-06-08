// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64821.2.phpt
  it("Bug #64821 Custom Exceptions crash when internal properties overridden (variation 2)", function () {
    expect(parser.parseCode("<?php\nclass a extends exception {\n    public function __construct() {\n        $this->line = 0;\n    }\n}\nthrow new a;\n?>")).toMatchSnapshot();
  });
});
