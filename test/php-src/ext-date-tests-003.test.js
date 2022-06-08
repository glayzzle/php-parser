// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/003.phpt
  it("date suffixes test", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nfor ($i = 0; $i < 32; $i++) {\n    var_dump(date(\"jS\", mktime(0,0,0, 1, $i, 2006)));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
