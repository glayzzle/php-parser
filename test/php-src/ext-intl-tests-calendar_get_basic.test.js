// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_get_basic.phpt
  it("IntlCalendar::get() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 4);\nvar_dump($intlcal->get(IntlCalendar::FIELD_DAY_OF_MONTH));\nvar_dump(intlcal_get($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH));\n?>")).toMatchSnapshot();
  });
});
