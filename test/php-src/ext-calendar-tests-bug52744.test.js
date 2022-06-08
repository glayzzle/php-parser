// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug52744.phpt
  it("Bug #52744 (cal_days_in_month incorrect for December 1 BCE)", function () {
    expect(parser.parseCode("<?php\nvar_dump(cal_days_in_month(CAL_GREGORIAN, 12, -1));\nvar_dump(cal_days_in_month(CAL_JULIAN, 12, -1));\n?>")).toMatchSnapshot();
  });
});
