// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getWeekendTransition_basic.phpt
  it("IntlCalendar::getWeekendTransition() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance();\nvar_dump($intlcal->getWeekendTransition(IntlCalendar::DOW_SUNDAY));\nvar_dump(intlcal_get_weekend_transition($intlcal, IntlCalendar::DOW_SUNDAY));\n?>")).toMatchSnapshot();
  });
});
