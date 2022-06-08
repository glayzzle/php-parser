// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug66797.phpt
  it("Bug #66797 (mb_substr only takes 32-bit signed integer)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    mb_substr('bar', 0, 0x7fffffff),\n    mb_substr('bar', 0, 0x80000000),\n    mb_substr('bar', 0xffffffff, 1),\n    mb_substr('bar', 0x100000000, 1)\n);\n?>")).toMatchSnapshot();
  });
});
