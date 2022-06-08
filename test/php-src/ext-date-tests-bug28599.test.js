// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug28599.phpt
  it("Bug #28599 (strtotime fails with zero base time)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"Europe/Amsterdam\");\nprint gmdate(\"d-m-Y H:i:s\", strtotime(\"+30 minutes\", 1100535573));\n?>")).toMatchSnapshot();
  });
});
