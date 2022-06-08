// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_fromarray_param_multiarray.phpt
  it("Tries to create a SplFixedArray using the fromArray() function and a multi dimensional array.", function () {
    expect(parser.parseCode("<?php\n$array = SplFixedArray::fromArray(array(array('1')));\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
