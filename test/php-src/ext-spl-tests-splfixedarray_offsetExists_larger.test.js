// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/splfixedarray_offsetExists_larger.phpt
  it("Checks that offsetExists() does not accept a value larger than the array.", function () {
    expect(parser.parseCode("<?php\n$ar = new SplFixedArray(3);\n$ar[0] = 1;\n$ar[1] = 2;\n$ar[2] = 3;\nvar_dump($ar->offsetExists(4));\n?>")).toMatchSnapshot();
  });
});
