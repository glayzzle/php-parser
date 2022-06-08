// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug71525.phpt
  it("Bug #71525 (Calls to date_modify will mutate timelib_rel_time, causing date_date_set issues)", function () {
    expect(parser.parseCode("<?php\n$date = new DateTime('2011-12-25 00:00:00');\n$date->modify('first day of next month');\n$date->setDate('2012', '1', '29');\nvar_dump($date);\n?>")).toMatchSnapshot();
  });
});
