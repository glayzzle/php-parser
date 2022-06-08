// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_timezone_get_basic1.phpt
  it("Test date_timezone_get() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing date_timezone_get() : basic functionality ***\\n\";\ndate_default_timezone_set(\"Europe/London\");\n$object = date_create(\"2009-01-30 17:57:32\");\n$tz = date_timezone_get($object);\nvar_dump( timezone_name_get($tz) );\ndate_default_timezone_set(\"America/New_York\");\n$object = date_create(\"2009-01-30 17:57:32\");\n$tz = date_timezone_get($object);\nvar_dump( timezone_name_get($tz) );\n$la_time = timezone_open(\"America/Los_Angeles\");\ndate_timezone_set($object, $la_time);\n$tz = date_timezone_get($object);\nvar_dump( timezone_name_get($tz) );\n?>")).toMatchSnapshot();
  });
});
