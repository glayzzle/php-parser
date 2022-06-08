// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug53437_var1.phpt
  it("Bug #53437 (Crash when using unserialized DatePeriod instance), variation 2", function () {
    expect(parser.parseCode("<?php\n$s = 'O:10:\"DatePeriod\":0:{}';\n$dp = unserialize($s);\nvar_dump($dp);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
