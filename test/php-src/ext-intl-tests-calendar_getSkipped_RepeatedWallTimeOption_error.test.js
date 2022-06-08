// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getSkipped_RepeatedWallTimeOption_error.phpt
  it("IntlCalendar::getSkipped/RepeatedWallTimeOption(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(intlcal_get_skipped_wall_time_option(1));\n?>")).toMatchSnapshot();
  });
});
