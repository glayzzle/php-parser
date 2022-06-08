// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getLocale_error.phpt
  it("IntlCalendar::getLocale(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_get_locale(1));\n?>")).toMatchSnapshot();
  });
});
