// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setsize_001.phpt
  it("SPL: FixedArray: setsize - populate array, then shrink", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray(5);\n$array[0] = 'one';\n$array[1] = 'two';\n$array[2] = 'three';\n$array[3] = 'four';\n$array[4] = 'five';\n$array->setSize(2);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
