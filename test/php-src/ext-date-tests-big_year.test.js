// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/big_year.phpt
  it("Handling of large year values", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"America/Toronto\");\n$t = mktime(0,0,0,1,1,2922770265);\nvar_dump(date(\"r\", $t));\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
