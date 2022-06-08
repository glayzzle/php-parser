// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug55397.phpt
  it("Bug #55397 (comparison of incomplete DateTime causes SIGSEGV)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Prague');\nvar_dump(unserialize('O:8:\"DateTime\":0:{}') == new DateTime);\n?>")).toMatchSnapshot();
  });
});
