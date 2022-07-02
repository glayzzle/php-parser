// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73960.phpt
  it("Bug #73960: Leak with instance method calling static method with referenced return", function () {
    expect(parser.parseCode("<?php\n$value = 'one';\n$array = array($value);\n$array = $ref =& $array;\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
