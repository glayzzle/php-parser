// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_fromDateTime_error.phpt
  it("IntlCalendar::fromDateTime(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Lisbon');\ntry {\n    IntlCalendar::fromDateTime(\"foobar\");\n} catch (Exception $e) {\n    echo \"threw exception, OK\";\n}\nclass A extends DateTime {\nfunction __construct() {}\n}\nvar_dump(IntlCalendar::fromDateTime(new A));\n$date = new DateTime('2012-01-01 00:00:00 +24:00');\nvar_dump(IntlCalendar::fromDateTime($date));\n$date = new DateTime('2012-01-01 00:00:00 WEST');\nvar_dump(IntlCalendar::fromDateTime($date));\n?>")).toMatchSnapshot();
  });
});
