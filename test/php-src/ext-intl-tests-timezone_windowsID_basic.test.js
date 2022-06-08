// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_windowsID_basic.phpt
  it("IntlTimeZone::getWindowsID basic test", function () {
    expect(parser.parseCode("<?php\n$tzs = array(\n  'America/Bogota',\n  'America/Havana',\n  'America/Indiana/Knox',\n  'America/Los_Angeles',\n  'Azeroth/Kalimdor/Durotar',\n  'Africa/Casablanca',\n  'Asia/Singapore',\n  'Australia/Perth',\n  'Europe/London',\n  'Europe/Istanbul',\n);\nforeach ($tzs as $tz) {\n  var_dump(IntlTimeZone::getWindowsID($tz));\n  if (intl_get_error_code() != U_ZERO_ERROR) {\n    echo \"Error: \", intl_get_error_message(), \"\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
