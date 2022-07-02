// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55135.phpt
  it("Bug #55135 (Array keys are no longer type casted in unset())", function () {
    expect(parser.parseCode("<?php\n// This fails.\n$array = array(1 => 2);\n$a = \"1\";\nunset($array[$a]);\nprint_r($array);\n// Those works.\n$array = array(1 => 2);\n$a = 1;\nunset($array[$a]);\nprint_r($array);\n$array = array(1 => 2);\nunset($array[1]);\nprint_r($array);\n$array = array(1 => 2);\nunset($array[\"1\"]);\nprint_r($array);\n?>")).toMatchSnapshot();
  });
});
