// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/008.phpt
  it("getdate() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$t = mktime(0,0,0, 6, 27, 2006);\nvar_dump(getdate($t));\nvar_dump(getdate());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
