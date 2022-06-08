// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_fromarray_non_indexes.phpt
  it("Create a SplFixedArray from an array using the fromArray() function don't try to preserve the indexes.", function () {
    expect(parser.parseCode("<?php\n$array = SplFixedArray::fromArray(array(1 => 1,\n                                        2 => '2',\n                                        3 => false),\n                                    false);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
