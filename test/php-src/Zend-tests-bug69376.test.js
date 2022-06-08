// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69376.phpt
  it("Bug #69376 (Wrong ref counting)", function () {
    expect(parser.parseCode("<?php\nfunction &test() {\n    $var = array();\n    $var[] =& $var;\n    return $var;\n};\n$a = test();\n$b = $a;\n$b[0] = 123;\nprint_r($a);\nprint_r($b);\n?>")).toMatchSnapshot();
  });
});
