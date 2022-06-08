// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35218.phpt
  it("Bug #35218 (strtotime no longer ignores timezone comments like \"(PST)\")", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$date = 'Sun, 13 Nov 2005 22:56:10 -0800 (PST)';\n$date_fixed = 'Sun, 13 Nov 2005 22:56:10 -0800';\nvar_dump(strtotime($date));\nvar_dump(strtotime($date_fixed));\n?>")).toMatchSnapshot();
  });
});
