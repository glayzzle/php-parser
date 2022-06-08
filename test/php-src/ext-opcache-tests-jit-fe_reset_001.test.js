// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fe_reset_001.phpt
  it("FE_RESET: 001 undef $$ operand", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 5; $i++) {\n    for ($j = 0; $j < $i; $j++) {}\n    foreach ($$i as $x) {}\n}\n?>\nOK")).toMatchSnapshot();
  });
});
