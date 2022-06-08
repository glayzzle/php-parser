// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_create_cal_arg.phpt
  it("IntlDateFormatter: several forms of the calendar arg", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", 'Atlantic/Azores');\n$ts = strtotime('2012-01-01 00:00:00 UTC');\n$cal = new IntlGregorianCalendar('UTC', NULL);\n$df = new IntlDateFormatter('es_ES', 0, 0, NULL, $cal);\necho $df->format($ts), \"\\n\";\n$cal = IntlCalendar::createInstance('UTC', 'en@calendar=islamic');\n$df = new IntlDateFormatter('es_ES', 0, 0, NULL, $cal);\necho $df->format($ts), \"\\n\";\n//override calendar's timezone\n$cal = new IntlGregorianCalendar('UTC', NULL);\n$df = new IntlDateFormatter('es_ES', 0, 0, 'Europe/Madrid', $cal);\necho $df->format($ts), \"\\n\";\n//default calendar is gregorian\n$df = new IntlDateFormatter('es_ES@calendar=islamic', 0, 0);\necho $df->format($ts), \"\\n\";\n//try now with traditional\n$df = new IntlDateFormatter('es_ES@calendar=islamic', 0, 0, NULL, IntlDateFormatter::TRADITIONAL);\necho $df->format($ts), \"\\n\";\n//the timezone can be overridden when not specifying a calendar\n$df = new IntlDateFormatter('es_ES@calendar=islamic', 0, 0, 'UTC', IntlDateFormatter::TRADITIONAL);\necho $df->format($ts), \"\\n\";\n$df = new IntlDateFormatter('es_ES', 0, 0, 'UTC', 0);\necho $df->format($ts), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
