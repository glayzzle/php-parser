// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/005.phpt
  it("idate() and invalid params", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$t = mktime(0,0,0, 6, 27, 2006);\nvar_dump(idate(1,1));\nvar_dump(idate(\"\"));\nvar_dump(idate(0));\nvar_dump(idate(\"B\", $t));\nvar_dump(idate(\"[\", $t));\nvar_dump(idate(\"'\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
