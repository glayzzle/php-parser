// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_set_basic.phpt
  it("IntlCalendar::set() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance();\nvar_dump($intlcal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 2));\nvar_dump($intlcal->get(IntlCalendar::FIELD_DAY_OF_MONTH));\nvar_dump(intlcal_set($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH, 3));\nvar_dump($intlcal->get(IntlCalendar::FIELD_DAY_OF_MONTH));\n?>")).toMatchSnapshot();
  });
});
