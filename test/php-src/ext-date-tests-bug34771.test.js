// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug34771.phpt
  it("Bug #34771 (strtotime() fails with 1-12am/pm)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$tests = array(\n    '12am', '1am', '1pm',\n    '12a.m.', '1a.m.', '1p.m.',\n    '12:00am', '1:00am', '1:00pm',\n    '12:00a.m.', '1:00a.m.', '1:00p.m.'\n);\nforeach ($tests as $test) {\n    $t = strtotime(\"2005-12-22 \". $test);\n    printf(\"%-10s => %s\\n\", $test, date(DATE_ISO8601, $t));\n}\n?>")).toMatchSnapshot();
  });
});
