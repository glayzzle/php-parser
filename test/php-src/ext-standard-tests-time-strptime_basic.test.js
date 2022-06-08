// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/strptime_basic.phpt
  it("Test strptime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$orig = setlocale(LC_ALL, 'C');\ndate_default_timezone_set(\"GMT\");\necho \"*** Testing strptime() : basic functionality ***\\n\";\n$input = \"10:00:00 AM July 2 1963\";\n$tstamp = strtotime($input);\n$str = strftime(\"%r %B%e %Y %Z\", $tstamp);\nvar_dump(strptime($str, '%H:%M:%S %p %B %d %Y'));\n$str = strftime(\"%T %D\", $tstamp);\nvar_dump(strptime($str, '%H:%M:%S %m/%d/%y'));\n$str = strftime(\"%A %B %e %R\", $tstamp);\nvar_dump(strptime($str, '%A %B %e %R'));\nsetlocale(LC_ALL, $orig);\n?>")).toMatchSnapshot();
  });
});
