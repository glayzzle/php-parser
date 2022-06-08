// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72543_2.phpt
  it("Bug #72543.2 (different references behavior comparing to PHP 5)", function () {
    expect(parser.parseCode("<?php\n$arr = [];\n$arr[0] = null;\n$ref =& $arr[0];\nunset($ref);\n$arr[0][$arr[0]] = null;\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
