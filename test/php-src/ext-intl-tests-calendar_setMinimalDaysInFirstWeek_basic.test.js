// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setMinimalDaysInFirstWeek_basic.phpt
  it("IntlCalendar::setMinimalDaysInFirstWeek() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump(\n        $intlcal->setMinimalDaysInFirstWeek(6),\n        $intlcal->getMinimalDaysInFirstWeek(),\n        intlcal_set_minimal_days_in_first_week($intlcal, 5),\n        $intlcal->getMinimalDaysInFirstWeek()\n);\n?>")).toMatchSnapshot();
  });
});
