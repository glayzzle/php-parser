// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/match_breakpoints_003.phpt
  it("Test match default breakpoint with dim assignment", function () {
    expect(parser.parseCode("<?php\n$foo = [];\n$foo['foo'] = match (0) {\n    0 => 'foo',\n    default => 'bar', // breakpoint #0\n};\n$foo->bar = match (1) {\n    0 => 'foo',\n    default => 'bar', // breakpoint #1\n};\n")).toMatchSnapshot();
  });
});
