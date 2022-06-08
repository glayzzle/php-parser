// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/mktime-3-64bit.phpt
  it("mktime() [3] (64-bit)", function () {
    expect(parser.parseCode("<?php\n$tzs = array(\"America/Toronto\", \"Europe/Oslo\");\n$years = array(0, 69, 70, 71, 99, 100, 101, 105, 110, 1900, 1901, 1902, 1999, 2000, 2001);\nforeach ($tzs as $tz) {\n    echo $tz, \"\\n\";\n    date_default_timezone_set($tz);\n    foreach ($years as $year) {\n        printf(\"Y: %4d - \", $year);\n        $ret = mktime(1, 1, 1, 1, 1, $year);\n        if ($ret == FALSE) {\n            echo \"out of range\\n\";\n        } else {\n            echo date(\"F \".DATE_ISO8601, $ret), \"\\n\";\n        }\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
