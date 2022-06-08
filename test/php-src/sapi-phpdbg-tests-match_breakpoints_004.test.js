// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/match_breakpoints_004.phpt
  it("Test match default breakpoint with static variable assignment", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static $bar;\n}\nFoo::$bar = match (0) {\n    0 => 'foo',\n    default => 'bar', // breakpoint #0\n};\nFoo::$bar = match (1) {\n    0 => 'foo',\n    default => 'bar', // breakpoint #1\n};\n")).toMatchSnapshot();
  });
});
