// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_interval_create_from_date_string.phpt
  it("Test date_interval_create_from_date_string() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$string = '1 day'; //P1D\n$i = date_interval_create_from_date_string($string);\nvar_dump($i->d);\n$string = '2 weeks'; //14 days\n$i = date_interval_create_from_date_string($string);\nvar_dump($i->d);\n$string = '3 months';\n$i = date_interval_create_from_date_string($string);\nvar_dump($i->m);\n$string = '4 years';\n$i = date_interval_create_from_date_string($string);\nvar_dump($i->y);\n$string = '1 year + 1 day';\n$i = date_interval_create_from_date_string($string);\nvar_dump($i->y);\nvar_dump($i->d);\n?>")).toMatchSnapshot();
  });
});
