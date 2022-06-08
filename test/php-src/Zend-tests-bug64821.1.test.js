// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64821.1.phpt
  it("Bug #64821 Custom Exceptions crash when internal properties overridden (variation 1)", function () {
    expect(parser.parseCode("<?php\nclass a extends exception {\n    public function __construct() {\n        $this->message = NULL;\n        $this->string  = NULL;\n        $this->code    = array();\n        $this->line = 0;\n    }\n}\nthrow new a;\n?>")).toMatchSnapshot();
  });
});
