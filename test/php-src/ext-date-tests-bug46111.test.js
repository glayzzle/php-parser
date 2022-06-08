// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug46111.phpt
  it("Bug #46111 (strtotime() returns false for some valid timezones)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Calcutta');\n$timezones = timezone_identifiers_list();\n# An empty list indicates no errors\nprint \"[strtotime(timezone) == false - Begin List]\\n\";\nforeach ($timezones as $zone) {\n    $date_string = \"2008-01-01 13:00:00 \" . $zone;\n    if (!strtotime($date_string)) {\n        echo $zone . \"\\n\";\n    }\n}\nprint \"[strtotime(timezone) == false - End List]\\n\";\n?>")).toMatchSnapshot();
  });
});
