// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_create-relative.phpt
  it("date_create() with large relative offsets", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nif (!defined('PHP_INT_MIN')) {\n    define('PHP_INT_MIN', intval(-PHP_INT_MAX - 1));\n}\n$base_time = '28 Feb 2008 12:00:00';\n// Most offsets tested in strtotime-relative.phpt. These are tests for dates outside the 32-bit range.\n$offsets = array(\n    // around 10 leap year periods (4000 years) in days\n    '1460000 days',\n    '1460969 days',\n    '1460970 days',\n    '1460971 days',\n    '1462970 days',\n    // around 1 leap year period in years\n    '398 years',\n    '399 years',\n    '400 years',\n    '401 years',\n    // around 40000 years\n    '39755 years',\n    '39999 years',\n    '40000 years',\n    '40001 years',\n    '41010 years',\n    // bigger than int (32-bit)\n    '10000000000 seconds',\n    '10000000000 minutes',\n    '10000000000 hours',\n    '10000000000 days',\n    '10000000000 months',\n    '10000000000 years',\n);\nforeach ($offsets AS $offset) {\n    foreach (array('+', '-') AS $direction) {\n        $dt = date_create(\"$base_time $direction$offset\");\n        echo \"$direction$offset: \" . date_format($dt, DATE_ISO8601) . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
