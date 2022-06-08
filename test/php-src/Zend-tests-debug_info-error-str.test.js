// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_info-error-str.phpt
  it("Testing __debugInfo() magic method with bad returns STRING", function () {
    expect(parser.parseCode("<?php\nclass C {\n  public $val;\n  public function __debugInfo() {\n    return $this->val;\n  }\n  public function __construct($val) {\n    $this->val = $val;\n  }\n}\n$c = new C(\"foo\");\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
