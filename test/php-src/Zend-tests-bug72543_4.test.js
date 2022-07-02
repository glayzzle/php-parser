// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72543_4.phpt
  it("Bug #72543.4 (different references behavior comparing to PHP 5)", function () {
    expect(parser.parseCode("<?php\n$arr = [1];\n$ref =& $arr[0];\nunset($ref);\nvar_dump($arr[0] + ($arr[0] = 2));\n?>")).toMatchSnapshot();
  });
});
