// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51994.phpt
  it("Bug #51994 (date_parse_from_format is parsing invalid date using 'yz' format)", function () {
    expect(parser.parseCode("<?php\n$trans_date = '10153'; // 152nd day of year 2010 -> 03.06.2010\n$a_date\t= date_parse_from_format('yz', $trans_date);\nvar_dump($a_date);\n?>")).toMatchSnapshot();
  });
});
