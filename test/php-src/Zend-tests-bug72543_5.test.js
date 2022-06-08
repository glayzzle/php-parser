// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72543_5.phpt
  it("Bug #72543.5 (different references behavior comparing to PHP 5)", function () {
    expect(parser.parseCode("<?php\n$arr = [1];\n$ref =& $arr[0];\nvar_dump($arr[0] + ($arr[0] = 2));\n$obj = new stdClass;\n$obj->prop = 1;\n$ref =& $obj->prop;\nvar_dump($obj->prop + ($obj->prop = 2));\n?>")).toMatchSnapshot();
  });
});
