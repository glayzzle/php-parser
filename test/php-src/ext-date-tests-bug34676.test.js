// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug34676.phpt
  it("Bug #34676 (missing support for strtotime(\"midnight\") and strtotime(\"noon\"))", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$tests = array(\n    'noon', 'midnight'\n);\nforeach ($tests as $test) {\n    $t = strtotime(\"2005-12-22 \". $test);\n    printf(\"%-10s => %s\\n\", $test, date(DATE_ISO8601, $t));\n}\n?>")).toMatchSnapshot();
  });
});
