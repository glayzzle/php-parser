// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_clear_basic.phpt
  it("IntlCalendar::clear() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\nvar_dump($intlcal->clear());\nvar_dump(\n    $intlcal->get(IntlCalendar::FIELD_YEAR),\n    $intlcal->get(IntlCalendar::FIELD_MONTH),\n    $intlcal->get(IntlCalendar::FIELD_DAY_OF_MONTH),\n    $intlcal->get(IntlCalendar::FIELD_HOUR),\n    $intlcal->get(IntlCalendar::FIELD_MINUTE),\n    $intlcal->get(IntlCalendar::FIELD_SECOND),\n    $intlcal->get(IntlCalendar::FIELD_MILLISECOND)\n);\n$intlcal2 = IntlCalendar::createInstance('Europe/Amsterdam');\nintlcal_clear($intlcal2, null);\nvar_dump($intlcal2->getTime());\n?>")).toMatchSnapshot();
  });
});
