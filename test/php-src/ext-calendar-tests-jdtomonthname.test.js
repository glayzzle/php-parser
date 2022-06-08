// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtomonthname.phpt
  it("jdtomonthname() test", function () {
    expect(parser.parseCode("<?php\n$jd_days = Array(\n    2453396,\n    2440588,\n    -1,\n    10000000\n    );\nforeach ($jd_days as $jd_day) {\n    echo \"=== \", $jd_day, \"\\n\";\n    var_dump(jdmonthname($jd_day,0));\n    var_dump(jdmonthname($jd_day,1));\n    var_dump(jdmonthname($jd_day,2));\n    var_dump(jdmonthname($jd_day,3));\n    var_dump(jdmonthname($jd_day,4));\n    var_dump(jdmonthname($jd_day,5));\n    echo \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
