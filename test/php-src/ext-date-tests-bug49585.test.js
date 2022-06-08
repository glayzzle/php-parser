// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug49585.phpt
  it("Bug #49585 (date_format buffer not long enough for >4 digit years)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$date = new DateTime('-1500-01-01');\nvar_dump($date->format('r'));\n$date->setDate(-2147483648, 1, 1);\nvar_dump($date->format('r'));\nvar_dump($date->format('c'));\n?>")).toMatchSnapshot();
  });
});
