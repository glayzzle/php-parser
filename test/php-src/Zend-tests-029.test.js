// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/029.phpt
  it("Testing assign to property of an object in an array", function () {
    expect(parser.parseCode("<?php\n$arr = array(new stdClass);\n$arr[0]->a = clone $arr[0];\nvar_dump($arr);\n$arr[0]->b = new $arr[0];\nvar_dump($arr);\n$arr[0]->c = $arr[0]->a;\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
