// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getTimeZone_basic.phpt
  it("IntlCalendar::getTimeZone() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('GMT+00:01');\nprint_r($intlcal->getTimeZone());\nprint_r(intlcal_get_time_zone($intlcal));\n?>")).toMatchSnapshot();
  });
});
