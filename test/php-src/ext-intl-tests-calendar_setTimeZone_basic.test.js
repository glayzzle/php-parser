// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setTimeZone_basic.phpt
  it("IntlCalendar::setTimeZone() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal = IntlCalendar::createInstance('Europe/Amsterdam');\nprint_r($intlcal->getTimeZone()->getID());\necho \"\\n\";\nvar_dump($intlcal->get(IntlCalendar::FIELD_ZONE_OFFSET));\n$intlcal->setTimeZone(IntlTimeZone::getGMT());\nprint_r($intlcal->getTimeZone()->getID());\necho \"\\n\";\nvar_dump($intlcal->get(IntlCalendar::FIELD_ZONE_OFFSET));\nintlcal_set_time_zone($intlcal,\n        IntlTimeZone::createTimeZone('GMT+05:30'));\nprint_r($intlcal->getTimeZone()->getID());\necho \"\\n\";\nvar_dump($intlcal->get(IntlCalendar::FIELD_ZONE_OFFSET));\n?>")).toMatchSnapshot();
  });
});
