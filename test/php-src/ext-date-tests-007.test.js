// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/007.phpt
  it("localtime() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$t = mktime(0,0,0, 6, 27, 2006);\nvar_dump(localtime());\nvar_dump(localtime($t));\nvar_dump(localtime($t, true));\nvar_dump(localtime($t, false));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
