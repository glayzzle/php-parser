// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug67109.phpt
  it("Bug #67109 (First uppercase letter breaks date string parsing)", function () {
    expect(parser.parseCode("<?php\nvar_dump(date('d.m.Y',strtotime('last day of april')));\nvar_dump(date('d.m.Y',strtotime('Last day of april')));\nvar_dump(date('d.m.Y',strtotime('lAst Day of April')));\n?>")).toMatchSnapshot();
  });
});
