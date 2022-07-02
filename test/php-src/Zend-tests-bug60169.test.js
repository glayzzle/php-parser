// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60169.phpt
  it("Bug #60169 (Conjunction of ternary and list crashes PHP)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\n$arr  = array(\"test\");\nlist($a,$b) = is_array($arr)? $arr : $arr;\nlist($c,$d) = is_array($arr)?: NULL;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
