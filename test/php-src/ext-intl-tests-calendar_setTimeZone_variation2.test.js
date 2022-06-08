// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setTimeZone_variation2.phpt
  it("IntlCalendar::setTimeZone(): different ways to specify time zone", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$intlcal = new IntlGregorianCalendar();\n$intlcal->setTimeZone('Europe/Paris');\nvar_dump($intlcal->getTimeZone()->getID());\n$intlcal->setTimeZone(new DateTimeZone('Europe/Madrid'));\nvar_dump($intlcal->getTimeZone()->getID());\n$pstdate = new DateTime('2012-01-01 00:00:00 PST');\n$intlcal->setTimeZone($pstdate->getTimeZone());\nvar_dump($intlcal->getTimeZone()->getID());\n$offsetdate = new DateTime('2012-01-01 00:00:00 -02:30');\n$intlcal->setTimeZone($offsetdate->getTimeZone());\nvar_dump($intlcal->getTimeZone()->getID());\n?>")).toMatchSnapshot();
  });
});
