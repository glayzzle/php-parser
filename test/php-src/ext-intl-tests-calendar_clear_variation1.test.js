// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_clear_variation1.phpt
  it("IntlCalendar::clear() 1 arg variation", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('UTC');\n$intlcal->setTime(strtotime('2012-02-29 05:06:07 +0000') * 1000);\n//print_R($intlcal);\nvar_dump($intlcal->isSet(IntlCalendar::FIELD_MONTH));\nvar_dump($intlcal->clear(IntlCalendar::FIELD_MONTH));\nvar_dump($intlcal->isSet(IntlCalendar::FIELD_MONTH));\n//print_R($intlcal);\nvar_dump(\n    $intlcal->getTime(),\n    strtotime('2012-01-29 05:06:07 +0000') * 1000.\n);\n?>")).toMatchSnapshot();
  });
});
