// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_toArray_empty.phpt
  it("SplFixedArray::toArray with empty array", function () {
    expect(parser.parseCode("<?php var_dump((new SplFixedArray())->toArray()); ?>")).toMatchSnapshot();
  });
});
