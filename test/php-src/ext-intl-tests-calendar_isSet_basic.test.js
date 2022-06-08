// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_isSet_basic.phpt
  it("IntlCalendar::isSet() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal->isSet(IntlCalendar::FIELD_MINUTE));\n$intlcal->clear(IntlCalendar::FIELD_MINUTE);\nvar_dump($intlcal->isSet(IntlCalendar::FIELD_MINUTE));\n$intlcal->set(IntlCalendar::FIELD_MINUTE, 0);\nvar_dump(intlcal_is_set($intlcal, IntlCalendar::FIELD_MINUTE));\n?>")).toMatchSnapshot();
  });
});
