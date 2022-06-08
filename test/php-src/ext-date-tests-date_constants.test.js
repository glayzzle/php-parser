// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_constants.phpt
  it("Date constants", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set(\"Europe/Oslo\");\n    $constants = array(\n        DATE_ATOM,\n        DATE_COOKIE,\n        DATE_ISO8601,\n        DATE_RFC822,\n        DATE_RFC850,\n        DATE_RFC1036,\n        DATE_RFC1123,\n        DATE_RFC2822,\n        DATE_RFC3339,\n        DATE_RSS,\n        DATE_W3C\n    );\n    foreach($constants as $const) {\n        var_dump(date($const, strtotime(\"1 Jul 06 14:27:30 +0200\")));\n        var_dump(date($const, strtotime(\"2006-05-30T14:32:13+02:00\")));\n    }\n    print \"\\n\";\n    var_dump(\n        DATE_ATOM    == DateTime::ATOM,\n        DATE_COOKIE  == DateTime::COOKIE,\n        DATE_ISO8601 == DateTime::ISO8601,\n        DATE_RFC822  == DateTime::RFC822,\n        DATE_RFC850  == DateTime::RFC850,\n        DATE_RFC1036 == DateTime::RFC1036,\n        DATE_RFC1123 == DateTime::RFC1123,\n        DATE_RFC2822 == DateTime::RFC2822,\n        DATE_RFC3339 == DateTime::RFC3339,\n        DATE_RSS     == DateTime::RSS,\n        DATE_W3C     == DateTime::W3C\n    );\n?>")).toMatchSnapshot();
  });
});
