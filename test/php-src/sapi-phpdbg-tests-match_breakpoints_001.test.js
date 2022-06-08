// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/match_breakpoints_001.phpt
  it("Test match default breakpoint with variable assignment", function () {
    expect(parser.parseCode("<?php\n$foo = match (0) {\n    0 => 'foo',\n    default => 'bar', // breakpoint #0\n};\n$foo = match (1) {\n    0 => 'foo',\n    default => 'bar', // breakpoint #1\n};\n")).toMatchSnapshot();
  });
});
