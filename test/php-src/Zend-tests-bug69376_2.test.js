// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69376_2.phpt
  it("Bug #69376 (Wrong ref counting)", function () {
    expect(parser.parseCode("<?php\n$array = array();\n$array[] = &$array;\n$a = $array;\nunset($array);\n$b = $a;\n$b[0] = 123;\nprint_r($a);\nprint_r($b);\n?>")).toMatchSnapshot();
  });
});
