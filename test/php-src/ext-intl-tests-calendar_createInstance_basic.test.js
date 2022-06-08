// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_createInstance_basic.phpt
  it("IntlCalendar::createInstance() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$cal = IntlCalendar::createInstance();\nprint_R($cal->getTimeZone());\nprint_R($cal->getLocale(Locale::ACTUAL_LOCALE));\necho \"\\n\";\nprint_R($cal->getType());\necho \"\\n\";\n$timeMillis = $cal->getTime();\n$time = time();\nvar_dump(abs($timeMillis - $time * 1000) < 2000);\n?>")).toMatchSnapshot();
  });
});
