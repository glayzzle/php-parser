// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sunrise_and_sunset_basic.phpt
  it("Basic test for date_sunrise and date_sunset based on example in PHP manual", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n/* calculate the sunrise time for Lisbon, Portugal\nLatitude: 38.4 North\nLongitude: 9 West\nZenith ~= 90\noffset: +1 GMT\n*/\necho \"Basic test for date_sunrise() and date_sunset()\\n\";\necho date(\"D M d Y\") . ', sunrise time : ' . date_sunrise(time(), SUNFUNCS_RET_STRING, 38.4, -9, 90, 1) . \"\\n\";\necho date(\"D M d Y\") . ', sunset time : ' . date_sunset(time(), SUNFUNCS_RET_STRING, 38.4, -9, 90, 1) . \"\\n\";\n// Check that calling with just the first parameter works.\nvar_dump(gettype(date_sunrise(time())));\nvar_dump(gettype(date_sunset(time())));\n?>")).toMatchSnapshot();
  });
});
