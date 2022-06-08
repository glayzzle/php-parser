// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug26090.phpt
  it("Bug #26090 (allow colons in time zone offset to strtotime())", function () {
    expect(parser.parseCode("<?php\n$t = '2003-10-28 10:20:30-0800';\necho date('Y-m-d H:i:s T', strtotime($t)) . \"\\n\";\n$t = '2003-10-28 10:20:30-08:00';\necho date('Y-m-d H:i:s T', strtotime($t)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
