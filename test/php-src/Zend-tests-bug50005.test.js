// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50005.phpt
  it("Bug #50005 (Throwing through Reflection modified Exception object makes segmentation fault)", function () {
    expect(parser.parseCode("<?php\nclass a extends exception {\n    public function __construct() {\n        $this->file = \"\";\n    }\n}\nthrow new a;\n?>")).toMatchSnapshot();
  });
});
