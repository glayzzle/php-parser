// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_isWeekend_error.phpt
  it("IntlCalendar::isWeekend(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_is_weekend(1));\n?>")).toMatchSnapshot();
  });
});
