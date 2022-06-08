// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52430.phpt
  it("Bug #52430 (date_parse parse 24:xx:xx as valid time)", function () {
    expect(parser.parseCode("<?php\nvar_dump(date_parse('2010-1-1 24:59:59'));\n?>")).toMatchSnapshot();
  });
});
