// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/breakpoints_004.phpt
  it("Test opcode breakpoints", function () {
    expect(parser.parseCode("<?php\n$i = 1;\necho $i++;\necho $i++;\necho $i++;\necho $i++;\n")).toMatchSnapshot();
  });
});
