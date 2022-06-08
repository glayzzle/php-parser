// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_fromDateTime_basic.phpt
  it("IntlCalendar::fromDateTime(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl_NL\");\ndate_default_timezone_set('Europe/Lisbon');\n$cal = IntlCalendar::fromDateTime('2012-01-01 00:00:00 Europe/Rome');\nvar_dump(\n    $cal->getTime(),\n    strtotime('2012-01-01 00:00:00 Europe/Rome') * 1000.,\n    $cal->getTimeZone()->getID(),\n    $cal->getLocale(1)\n);\necho \"\\n\";\n$cal = IntlCalendar::fromDateTime(new DateTime('2012-01-01 00:00:00 PST'), \"pt_PT\");\nvar_dump(\n    $cal->getTime(),\n    strtotime('2012-01-01 00:00:00 PST') * 1000.,\n    $cal->getTimeZone()->getID(),\n    $cal->getLocale(1)\n);\necho \"\\n\";\n$cal = intlcal_from_date_time(new DateTime('2012-01-01 00:00:00 +03:40'));\nvar_dump(\n    $cal->getTime(),\n    strtotime('2012-01-01 00:00:00 +03:40') * 1000.,\n    $cal->getTimeZone()->getID()\n);\n?>")).toMatchSnapshot();
  });
});
