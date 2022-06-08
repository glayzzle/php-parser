// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/006.phpt
  it("checkdate() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nvar_dump(checkdate(1,1,1));\nvar_dump(checkdate(2,29,2006));\nvar_dump(checkdate(31,6,2006));\nvar_dump(checkdate(1,1,32768));\nvar_dump(checkdate(1,1,32767));\nvar_dump(checkdate(-1,1,2006));\nvar_dump(checkdate(1,-1,2006));\nvar_dump(checkdate(1,1,-1));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
