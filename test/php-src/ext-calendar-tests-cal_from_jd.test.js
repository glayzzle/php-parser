// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/cal_from_jd.phpt
  it("cal_from_jd()", function () {
    expect(parser.parseCode("<?php\nprint_r(cal_from_jd(1748326, CAL_GREGORIAN));\nprint_r(cal_from_jd(1748324, CAL_JULIAN));\nprint_r(cal_from_jd( 374867, CAL_JEWISH));\nprint_r(cal_from_jd(      0, CAL_FRENCH));\n?>")).toMatchSnapshot();
  });
});
