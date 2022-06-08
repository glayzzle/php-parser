// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug73794.phpt
  it("Bug #73794 (Crash (out of memory) when using run and # command separator)", function () {
    expect(parser.parseCode("<?php\necho $argv[1];\n?>\n")).toMatchSnapshot();
  });
});
