// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_formatObject_calendar_variant5.phpt
  it("IntlDateFormatter::formatObject(): IntlCalendar tests", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", \"Europe/Lisbon\");\n$cal = IntlCalendar::fromDateTime('2012-01-01 00:00:00'); //Europe/Lisbon\necho IntlDateFormatter::formatObject($cal), \"\\n\";\necho IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), \"\\n\";\necho IntlDateFormatter::formatObject($cal, null, \"en-US\"), \"\\n\";\necho IntlDateFormatter::formatObject($cal, array(IntlDateFormatter::SHORT, IntlDateFormatter::FULL), \"en-US\"), \"\\n\";\necho IntlDateFormatter::formatObject($cal, 'E y-MM-d HH,mm,ss.SSS v', \"en-US\"), \"\\n\";\n$cal = IntlCalendar::fromDateTime('2012-01-01 05:00:00+03:00');\necho datefmt_format_object($cal, IntlDateFormatter::FULL), \"\\n\";\n$cal = IntlCalendar::createInstance(null,'en-US@calendar=islamic-civil');\n$cal->setTime(strtotime('2012-01-01 00:00:00')*1000.);\necho IntlDateFormatter::formatObject($cal), \"\\n\";\necho IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL, \"en-US\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
