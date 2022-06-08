// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68669.phpt
  it("DateTime::createFromFormat() does not allow NULL $timezone", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/Los_Angeles');\nvar_dump(DateTime::createFromFormat('Y/m/d H:i:s', '1995/06/08 12:34:56', null));\nvar_dump(DateTimeImmutable::createFromFormat('Y/m/d H:i:s', '1995/06/08 12:34:56', null));\n?>")).toMatchSnapshot();
  });
});
