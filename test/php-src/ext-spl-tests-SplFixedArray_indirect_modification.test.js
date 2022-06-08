// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_indirect_modification.phpt
  it("SplFixedArray indirect modification notice", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(1);\n$a[0][] = 3;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
