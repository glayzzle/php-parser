// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33869.phpt
  it("Bug #33869 (strtotime() doesn't parse \"+1days\" format)", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set(\"UTC\");\n    $tm = strtotime(\"2005-01-01 01:01:01\");\n    echo date(DATE_ISO8601, strtotime('+5days', $tm));\n    echo \"\\n\";\n    echo date(DATE_ISO8601, strtotime('+1month', $tm));\n    echo \"\\n\";\n    echo date(DATE_ISO8601, strtotime('+1year', $tm));\n    echo \"\\n\";\n    echo date(DATE_ISO8601, strtotime('+5 days', $tm));\n    echo \"\\n\";\n    echo date(DATE_ISO8601, strtotime('+1 month', $tm));\n    echo \"\\n\";\n    echo date(DATE_ISO8601, strtotime('+1 year', $tm));\n    echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});
