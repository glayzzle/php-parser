// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug67976.phpt
  it("Bug #67976 (cal_days_month() fails for final month of the French calendar)", function () {
    expect(parser.parseCode("<?php\nvar_dump(cal_days_in_month(CAL_FRENCH, 13, 14));\n?>")).toMatchSnapshot();
  });
});
