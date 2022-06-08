// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72710.phpt
  it("Bug #72710 (`mb_ereg` causes buffer overflow on regexp compile error)", function () {
    expect(parser.parseCode("<?php\nmb_ereg('(?<0>a)', 'a');\n?>")).toMatchSnapshot();
  });
});
