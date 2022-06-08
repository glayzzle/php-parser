// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setsize_shrink.phpt
  it("shrink a full array of integers", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray(5);\n$array[0] = 1;\n$array[1] = 1;\n$array[2] = 1;\n$array[3] = 1;\n$array[4] = 1;\n$array->setSize(4);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
