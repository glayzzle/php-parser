// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setTimeZone_error2.phpt
  it("IntlCalendar::setTimeZone(): valid time zones for DateTime but not ICU", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$intlcal = new IntlGregorianCalendar();\n$pstdate = new DateTime('2012-01-01 00:00:00 WEST');\n$intlcal->setTimeZone($pstdate->getTimeZone());\nvar_dump($intlcal->getTimeZone()->getID());\n$pstdate = new DateTime('2012-01-01 00:00:00 +24:00');\n$intlcal->setTimeZone($pstdate->getTimeZone());\nvar_dump($intlcal->getTimeZone()->getID());\n?>")).toMatchSnapshot();
  });
});
