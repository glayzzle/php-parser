// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_roll_variation1.phpt
  it("IntlCalendar::roll() bool argument variation", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = new IntlGregorianCalendar(2012, 1, 28);\nvar_dump($intlcal->roll(IntlCalendar::FIELD_DAY_OF_MONTH, true));\nvar_dump($intlcal->get(IntlCalendar::FIELD_MONTH)); //1 (Feb)\nvar_dump($intlcal->get(IntlCalendar::FIELD_DAY_OF_MONTH)); //29\nvar_dump(intlcal_roll($intlcal, IntlCalendar::FIELD_DAY_OF_MONTH, false));\nvar_dump($intlcal->get(IntlCalendar::FIELD_MONTH)); //1 (Feb)\nvar_dump($intlcal->get(IntlCalendar::FIELD_DAY_OF_MONTH)); //28\n?>")).toMatchSnapshot();
  });
});
