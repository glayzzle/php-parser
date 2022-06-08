// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67247.phpt
  it("Bug #67247 (spl_fixedarray_resize integer overflow)", function () {
    expect(parser.parseCode("<?php\n$ar = new SplFixedArray(1);\necho \"size: \".$ar->getSize().\"\\n\";\n$ar->setSize((PHP_INT_SIZE==8)?0x2000000000000001:0x40000001);\necho \"size: \".$ar->getSize().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
