// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_timestamp_set_nullparam2.phpt
  it("Test the function date_timestamp_set() with second null parameter.", function () {
    expect(parser.parseCode("<?php\n$dftz021 = date_default_timezone_get(); //UTC\n$dtms021 = date_create();\nvar_dump(date_timestamp_set($dtms021, null));\n?>")).toMatchSnapshot();
  });
});
