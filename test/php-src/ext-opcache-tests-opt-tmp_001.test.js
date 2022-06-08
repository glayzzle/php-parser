// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/tmp_001.phpt
  it("TMP variable optimization 001: TMP variable renumbering should be done after DFA optimizations", function () {
    expect(parser.parseCode("<?php\nis_a((int)\" $y \" + 0);\n?>")).toMatchSnapshot();
  });
});
