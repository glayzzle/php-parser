// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_timestamp_set.phpt
  it("Test the basics to function date_timestamp_set().", function () {
    expect(parser.parseCode("<?php\n$dftz021 = date_default_timezone_get(); //UTC\n$dtms021 = date_create();\ndate_timestamp_set($dtms021, 1234567890);\nvar_dump(date_format($dtms021, 'B => (U) => T Y-M-d H:i:s'));\n?>")).toMatchSnapshot();
  });
});
