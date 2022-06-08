// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_get_last_errors_basic.phpt
  it("date_get_last_errors() return false", function () {
    expect(parser.parseCode("<?php\nvar_dump(date_get_last_errors()); // no date was parsed, so no errors\n?>")).toMatchSnapshot();
  });
});
