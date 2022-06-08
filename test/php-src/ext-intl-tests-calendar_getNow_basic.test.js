// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getNow_basic.phpt
  it("IntlCalendar::getNow() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$now = IntlCalendar::getNow();\n$proc_now = intlcal_get_now();\n$time = time();\nvar_dump(abs($now - $proc_now) < 500);\nvar_dump(abs($time * 1000 - $proc_now) < 2000);\n?>")).toMatchSnapshot();
  });
});
