// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jddayofweek.phpt
  it("jddayofweek()", function () {
    expect(parser.parseCode("<?php\nforeach (array(2440588, 2452162, 2453926, -1000) as $jd) {\n  echo \"### JD $jd ###\\n\";\n  foreach (array(CAL_DOW_DAYNO, CAL_DOW_LONG, CAL_DOW_SHORT) as $mode) {\n    echo \"--- mode $mode ---\\n\";\n    for ($offset = 0; $offset <= 7; $offset++) {\n      echo jddayofweek($jd + $offset, $mode). \"\\n\";\n    }\n  }\n}\n?>")).toMatchSnapshot();
  });
});
