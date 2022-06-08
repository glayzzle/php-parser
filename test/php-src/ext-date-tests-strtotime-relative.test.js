// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime-relative.phpt
  it("strtotime() with relative offsets", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$base_time = 1204200000; // 28 Feb 2008 12:00:00\n$offsets = array(\n    // offset around a day\n    '80412 seconds',\n    '86399 seconds',\n    '86400 seconds',\n    '86401 seconds',\n    '112913 seconds',\n    // offset around 7 days\n    '134 hours',\n    '167 hours',\n    '168 hours',\n    '169 hours',\n    '183 hours',\n    // offset around 6 months\n    '178 days',\n    '179 days',\n    '180 days',\n    '183 days',\n    '184 days',\n    // offset around 10 years\n    '115 months',\n    '119 months',\n    '120 months',\n    '121 months',\n    '128 months',\n    // offset around 25 years (can't do much more reliably with strtotime)\n    '24 years',\n    '25 years',\n    '26 years'\n);\nforeach ($offsets AS $offset) {\n    foreach (array('+', '-') AS $direction) {\n        echo \"$direction$offset: \" . date(DATE_ISO8601, strtotime(\"$direction$offset\", $base_time)) . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
