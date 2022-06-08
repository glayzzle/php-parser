// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_get_setSkippedWallTimeOption_basic.phpt
  it("IntlCalendar::get/setSkippedWallTimeOption(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n//25 March 2012, transition to DST\n$intlcal = new IntlGregorianCalendar(2012, 2, 25, 0, 0, 0);\nvar_dump($intlcal->getSkippedWallTimeOption());\n$intlcal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 2);\n$intlcal->set(IntlCalendar::FIELD_MINUTE, 30);\necho \"Should be 3h30\\n\";\nvar_dump(\n    $intlcal->get(IntlCalendar::FIELD_HOUR_OF_DAY),\n    $intlcal->get(IntlCalendar::FIELD_MINUTE)\n);\nvar_dump($intlcal->setSkippedWallTimeOption(IntlCalendar::WALLTIME_FIRST));\nvar_dump(intlcal_get_skipped_wall_time_option($intlcal));\n$intlcal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 2);\n$intlcal->set(IntlCalendar::FIELD_MINUTE, 30);\necho \"Should be 1h30\\n\";\nvar_dump(\n    $intlcal->get(IntlCalendar::FIELD_HOUR_OF_DAY),\n    $intlcal->get(IntlCalendar::FIELD_MINUTE)\n);\nvar_dump(intlcal_set_skipped_wall_time_option($intlcal, IntlCalendar::WALLTIME_NEXT_VALID));\nvar_dump($intlcal->getSkippedWallTimeOption());\n$intlcal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 2);\n$intlcal->set(IntlCalendar::FIELD_MINUTE, 30);\necho \"Should be 3h00\\n\";\nvar_dump(\n    $intlcal->get(IntlCalendar::FIELD_HOUR_OF_DAY),\n    $intlcal->get(IntlCalendar::FIELD_MINUTE)\n);\n?>")).toMatchSnapshot();
  });
});
