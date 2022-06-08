// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68078.phpt
  it("Comparing datetime objects should account for microseconds", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$date1 = DateTime::createFromFormat('U.u', '1448889063.3531');\n$date2 = DateTime::createFromFormat('U.u', '1448889063.5216');\n$date3 = DateTime::createFromFormat('U.u', '1448889063.5216');\nvar_dump($date1 == $date2);\nvar_dump($date1 < $date2);\nvar_dump($date2 > $date1);\nvar_dump($date2 == $date3);\n?>")).toMatchSnapshot();
  });
});
