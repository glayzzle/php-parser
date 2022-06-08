// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67169.phpt
  it("Bug #67169: array_splice all elements, then []= gives wrong index", function () {
    expect(parser.parseCode("<?php\n$array = array('a', 'b');\narray_splice($array, 0, 2);\n$array[] = 'c';\nvar_dump($array);\n$array = array('a', 'b');\narray_shift($array);\narray_shift($array);\n$array[] = 'c';\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
