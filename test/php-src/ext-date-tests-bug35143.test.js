// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35143.phpt
  it("Bug #35143 (gettimeofday() ignores current time zone)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\nvar_dump(date_default_timezone_get());\nvar_dump(gettimeofday());\n?>")).toMatchSnapshot();
  });
});
