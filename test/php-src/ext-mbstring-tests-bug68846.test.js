// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug68846.phpt
  it("Bug #68846\tFalse detection of CJK Unified Ideographs Extension E", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    \"\\x00\\x02\\x0b\\xb7\" === mb_convert_encoding(\"\\x95\\x34\\xb2\\x35\", 'UTF-32', 'GB18030')\n);\n?>")).toMatchSnapshot();
  });
});
