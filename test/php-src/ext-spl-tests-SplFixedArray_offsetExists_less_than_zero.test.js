// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_offsetExists_less_than_zero.phpt
  it("SPL FixedArray offsetExists behaviour on a negative index", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray(5);\nif($array->offsetExists(-10) === false) {\n    echo 'PASS';\n}\n?>")).toMatchSnapshot();
  });
});
