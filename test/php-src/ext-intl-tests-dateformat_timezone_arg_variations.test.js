// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_timezone_arg_variations.phpt
  it("IntlDateFormatter: several forms of the timezone arg", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"date.timezone\", 'Atlantic/Azores');\n$ts = strtotime('2012-01-01 00:00:00 UTC');\n//should use Atlantic/Azores\n$df = new IntlDateFormatter('es_ES', 0, 0, NULL);\necho $df->format($ts), \"\\n\";\n$df = new IntlDateFormatter('es_ES', 0, 0, 'Europe/Amsterdam');\necho $df->format($ts), \"\\n\";\n$df = new IntlDateFormatter('es_ES', 0, 0, new DateTimeZone('Europe/Lisbon'));\necho $df->format($ts), \"\\n\";\n$df = new IntlDateFormatter('es_ES', 0, 0, IntlTimeZone::createTimeZone('America/New_York'));\necho $df->format($ts), \"\\n\";\n//time zone has priority\n$df = new IntlDateFormatter('es_ES', 0, 0, 'Europe/Amsterdam', new IntlGregorianCalendar('Europe/Lisbon'));\necho $df->format($ts), \"\\n\";\n//calendar has priority\n$df = new IntlDateFormatter('es_ES', 0, 0, NULL, new IntlGregorianCalendar('Europe/Lisbon'));\necho $df->format($ts), \"\\n\";\n$df = new IntlDateFormatter('es_ES', 0, 0, 'Europe/Amsterdam', 0);\necho $df->format($ts), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
