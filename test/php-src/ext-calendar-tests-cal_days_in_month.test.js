// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/cal_days_in_month.phpt
  it("cal_days_in_month()", function () {
    expect(parser.parseCode("<?php\n$num = cal_days_in_month(CAL_GREGORIAN, 8, 2003);\necho \"There are $num days in August 2003\\n\";\n$num = cal_days_in_month(CAL_GREGORIAN, 2, 2003);\necho \"There are $num days in February 2003\\n\";\n$num = cal_days_in_month(CAL_GREGORIAN, 2, 2004);\necho \"There are $num days in February 2004\\n\";\n$num = cal_days_in_month(CAL_GREGORIAN, 12, 2034);\necho \"There are $num days in December 2034\\n\";\n?>")).toMatchSnapshot();
  });
});
