// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/phpdbg_break_next.phpt
  it("Test phpdbg_break_next() function", function () {
    expect(parser.parseCode("<?php\necho 'A';\nphpdbg_break_next();\necho 'B';\n")).toMatchSnapshot();
  });
});
