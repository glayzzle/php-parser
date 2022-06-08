// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34518.phpt
  it("Bug #34518 (Unset doesn't separate container in CV)", function () {
    expect(parser.parseCode("<?php\n$arr = array(1,2,3);\n$arr[\"foo\"] = array(4,5,6);\n$copy = $arr;\nunset($copy[\"foo\"][0]);\nprint_r($arr);\nprint_r($copy);\n?>")).toMatchSnapshot();
  });
});
