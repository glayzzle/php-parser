// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug49081.phpt
  it("Bug #49081 (DateTime::diff() mistake if start in January and interval > 28 days)", function () {
    expect(parser.parseCode("<?php\n   date_default_timezone_set('Europe/Berlin');\n   $d1 = new DateTime('2010-01-01 06:00:00');\n   $d2 = new DateTime('2010-01-31 10:00:00');\n   $d  = $d1->diff($d2);\n   print_r($d);\n?>")).toMatchSnapshot();
  });
});
