// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setSize_filled_to_smaller.phpt
  it("Create array, fills it with and resizes it to lower value.", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray(5);\n$array[0] = 1;\n$array[1] = 1;\n$array[2] = 1;\n$array[3] = 1;\n$array[4] = 1;\n$array->setSize(2);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
