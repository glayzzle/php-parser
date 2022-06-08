// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/block_pass_001.phpt
  it("Block pass: Bugs in BOOL/QM_ASSIGN elision", function () {
    expect(parser.parseCode("<?php\n(bool) (true ? $x : $y);\n(bool) (true ? new stdClass : null);\n(bool) new stdClass;\n?>")).toMatchSnapshot();
  });
});
