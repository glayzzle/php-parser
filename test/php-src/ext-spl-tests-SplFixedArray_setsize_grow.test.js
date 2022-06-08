// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setsize_grow.phpt
  it("SplFixedArray::setSize() grow", function () {
    expect(parser.parseCode("<?php\necho \"\\n\";\n$array = new SplFixedArray(2);\n$array[0] = \"Value 1\";\n$array[1] = \"Value 2\";\n$array->setSize(4);\n$array[2] = \"Value 3\";\n$array[3] = \"Value 4\";\nprint_r($array);\n?>")).toMatchSnapshot();
  });
});
