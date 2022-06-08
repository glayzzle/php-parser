// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setSize_param_null.phpt
  it("SplFixedArray::setSize() with a null parameter", function () {
    expect(parser.parseCode("<?php\n$fixed_array = new SplFixedArray(2);\n$fixed_array->setSize(null);\nvar_dump($fixed_array);\n?>")).toMatchSnapshot();
  });
});
