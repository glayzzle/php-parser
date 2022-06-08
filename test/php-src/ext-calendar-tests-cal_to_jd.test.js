// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/cal_to_jd.phpt
  it("cal_to_jd()", function () {
    expect(parser.parseCode("<?php\necho cal_to_jd(CAL_GREGORIAN, 8, 26, 74), \"\\n\";\necho cal_to_jd(CAL_JULIAN, 8, 26, 74), \"\\n\";\necho cal_to_jd(CAL_JEWISH, 8, 26, 74), \"\\n\";\necho cal_to_jd(CAL_FRENCH, 8, 26, 74), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
