// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setSize_reduce.phpt
  it("SPL FixedArray can reduce size of array", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray(5);\n$array[0] = 'a';\n$array[1] = 'b';\n$array[2] = 'c';\n$array[3] = 'd';\n$array[4] = 'e';\n$array->setSize(3);\nprint_r($array);\n?>")).toMatchSnapshot();
  });
});
