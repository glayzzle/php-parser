// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug81097.phpt
  it("Bug #81097 (DateTimeZone silently falls back to UTC when providing an offset with seconds)", function () {
    expect(parser.parseCode("<?php\n$d = new DatetimeZone('+01:45:30');\nvar_dump($d);\n?>")).toMatchSnapshot();
  });
});
