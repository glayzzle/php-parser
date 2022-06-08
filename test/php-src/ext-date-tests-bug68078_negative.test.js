// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug68078_negative.phpt
  it("Comparing datetime objects with negative timestamps should account for microseconds", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$earlyDate1 = DateTime::createFromFormat('U.u', '1.8642')->modify('-5 seconds');\n$earlyDate2 = DateTime::createFromFormat('U.u', '1.2768')->modify('-5 seconds');\n$earlyDate3 = DateTime::createFromFormat('U.u', '1.2768')->modify('-5 seconds');\n// var_dump($earlyDate1, $earlyDate2, $earlyDate3);\nvar_dump($earlyDate1 == $earlyDate2);\nvar_dump($earlyDate1 > $earlyDate2);\nvar_dump($earlyDate2 < $earlyDate1);\nvar_dump($earlyDate2 == $earlyDate3);\n?>")).toMatchSnapshot();
  });
});
