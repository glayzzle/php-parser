// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_002.phpt
  it("SPL: ArrayObject copy constructor", function () {
    expect(parser.parseCode("<?php\n$array = array('1' => 'one',\n               '2' => 'two',\n               '3' => 'three');\n$object = new ArrayObject($array);\n$object[] = 'four';\n$arrayObject = new ArrayObject($object);\n$arrayObject[] = 'five';\nvar_dump($arrayObject);\n?>")).toMatchSnapshot();
  });
});
