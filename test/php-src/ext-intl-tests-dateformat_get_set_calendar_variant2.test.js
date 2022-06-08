// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_get_set_calendar_variant2.phpt
  it("IntlDateFormatter: setCalendar()/getCalendar()/getCalendarObject()", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", 'Atlantic/Azores');\n$ts = strtotime('2012-01-01 00:00:00 UTC');\nfunction d(IntlDateFormatter $df) {\nglobal $ts;\necho $df->format($ts), \"\\n\";\nvar_dump($df->getCalendar(),\n$df->getCalendarObject()->getType(),\n$df->getCalendarObject()->getTimeZone()->getId());\necho \"\\n\";\n}\n$df = new IntlDateFormatter('fr@calendar=islamic', 0, 0, 'Europe/Minsk');\nd($df);\n//changing the calendar with a cal type should not change tz\n$df->setCalendar(IntlDateFormatter::TRADITIONAL);\nd($df);\n//but changing with an actual calendar should\n$cal = IntlCalendar::createInstance(\"UTC\");\n$df->setCalendar($cal);\nd($df);\n?>")).toMatchSnapshot();
  });
});
