// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getFirstDayOfWeek_basic.phpt
  it("IntlCalendar::getFirstDayOfWeek() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal->getFirstDayOfWeek());\nvar_dump(intlcal_get_first_day_of_week($intlcal));\n?>")).toMatchSnapshot();
  });
});
