// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/strptime_error.phpt
  it("Test localtime() function : error conditions", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing strptime() : error conditions ***\\n\";\necho \"\\n-- Testing strptime() function on failure --\\n\";\n$format = '%b %d %Y %H:%M:%S';\nvar_dump( strptime('foo', $format) );\n?>")).toMatchSnapshot();
  });
});
