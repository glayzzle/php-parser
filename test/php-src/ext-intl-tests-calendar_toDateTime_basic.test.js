// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_toDateTime_basic.phpt
  it("IntlCalendar::toDateTime(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\nini_set('date.timezone', 'Europe/Lisbon');\n$cal = new IntlGregorianCalendar(2012,04,17,17,35,36);\n$dt = $cal->toDateTime();\nvar_dump($dt->format(\"c\"), $dt->getTimeZone()->getName());\n?>")).toMatchSnapshot();
  });
});
