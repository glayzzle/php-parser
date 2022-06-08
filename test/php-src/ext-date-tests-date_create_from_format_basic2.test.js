// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_create_from_format_basic2.phpt
  it("date_create_from_format() return false", function () {
    expect(parser.parseCode("<?php\nvar_dump(date_create_from_format('Y-m-d', '2009---01')); // invalid date\n?>")).toMatchSnapshot();
  });
});
