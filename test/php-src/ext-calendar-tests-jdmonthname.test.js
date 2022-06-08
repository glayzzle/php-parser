// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdmonthname.phpt
  it("jdmonthname()", function () {
    expect(parser.parseCode("<?php\nforeach (array(2440588, 2452162, 2453926) as $jd) {\n  echo \"### JD $jd ###\\n\";\n  for ($mode = 0; $mode <= 6; $mode++) {\n    echo \"--- mode $mode ---\\n\";\n    for ($offset = 0; $offset <= 12; $offset++) {\n      echo jdmonthname($jd + $offset * 30, $mode). \"\\n\";\n    }\n  }\n}\n?>")).toMatchSnapshot();
  });
});
