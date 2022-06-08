// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug71894.phpt
  it("Bug #71894 (AddressSanitizer: global-buffer-overflow in zif_cal_from_jd)", function () {
    expect(parser.parseCode("<?php\nvar_dump(cal_from_jd(347997, CAL_JEWISH));\nvar_dump(jdmonthname(347997,CAL_MONTH_JEWISH));?>")).toMatchSnapshot();
  });
});
