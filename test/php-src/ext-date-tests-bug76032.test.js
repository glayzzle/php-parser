// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug76032.phpt
  it("Bug #76032 (DateTime->diff having issues with leap days for timezones ahead of UTC)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$d = new DateTime('2008-03-01');\n$a = new DateTime('2018-03-01');\nvar_dump($d->diff($a)->y);\ndate_default_timezone_set('Europe/Amsterdam');\n$d = new DateTime('2008-03-01');\n$a = new DateTime('2018-03-01');\nvar_dump($d->diff($a)->y);\n?>")).toMatchSnapshot();
  });
});
