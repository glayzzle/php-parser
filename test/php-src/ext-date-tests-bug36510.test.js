// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug36510.phpt
  it("Bug #36510 (strtotime() fails to parse date strings with tabs)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$t = 1140973388;\nvar_dump(strtotime(\"-2 hours\", $t));\nvar_dump(strtotime(\"-2\\thours\", $t));\n?>")).toMatchSnapshot();
  });
});
