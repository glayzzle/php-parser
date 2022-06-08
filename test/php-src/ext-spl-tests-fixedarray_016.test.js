// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_016.phpt
  it("SPL: FixedArray: var_dump", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(2);\n$a[0] = \"foo\";\nvar_dump(empty($a[0]), empty($a[1]), $a);\n?>")).toMatchSnapshot();
  });
});
