// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/004.phpt
  it("date() format params", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$tz = array(\"UTC\", \"Asia/Jerusalem\", \"America/Chicago\", \"Europe/London\");\n$t = mktime(0, 0, 0, 6, 27, 2006);\nforeach ($tz as $zone) {\n    date_default_timezone_set($zone);\n    var_dump(date(\"w\", $t));\n    var_dump(date(\"z\", $t));\n    var_dump(date(\"n\", $t));\n    var_dump(date(\"t\", $t));\n    var_dump(date(\"L\", $t));\n    var_dump(date(\"a\", $t));\n    var_dump(date(\"B\", $t));\n    var_dump(date(\"g\", $t));\n    var_dump(date(\"G\", $t));\n    var_dump(date(\"Z\", $t));\n    var_dump(date(\"U\", $t));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
