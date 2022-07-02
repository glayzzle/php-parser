// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35509.phpt
  it("Bug #35509 (string constant as array key has different behavior inside object)", function () {
    expect(parser.parseCode("<?php\nclass mytest\n{\n  const classConstant = '01';\n  private $classArray = array( mytest::classConstant => 'value' );\n  public function __construct()\n  {\n    print_r($this->classArray);\n  }\n}\n$classtest = new mytest();\ndefine( \"normalConstant\", '01' );\n$normalArray = array( normalConstant => 'value' );\nprint_r($normalArray);\n?>")).toMatchSnapshot();
  });
});
