// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug76374.phpt
  it("Bug #76374 (Date difference varies according day time)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Paris');\n$objDateTo = new dateTime('2017-10-01');\n$objDateFrom = new dateTime('2017-01-01');\n$interval = $objDateTo->diff($objDateFrom);\necho $interval->m, \"\\n\";\n$objDateTo = new dateTime('2017-10-01 12:00:00');\n$objDateFrom = new dateTime('2017-01-01 12:00:00');\n$interval = $objDateTo->diff($objDateFrom);\necho $interval->m, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
