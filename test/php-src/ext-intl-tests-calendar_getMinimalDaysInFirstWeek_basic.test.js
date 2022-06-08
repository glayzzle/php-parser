// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getMinimalDaysInFirstWeek_basic.phpt
  it("IntlCalendar::getMinimalDaysInFirstWeek() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal->getMinimalDaysInFirstWeek());\nvar_dump(intlcal_get_minimal_days_in_first_week($intlcal));\n?>")).toMatchSnapshot();
  });
});
