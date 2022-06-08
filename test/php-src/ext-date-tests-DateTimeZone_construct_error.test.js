// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_construct_error.phpt
  it("Test new DateTimeZone() : error conditions", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\necho \"*** Testing DateTimeZone() : error conditions ***\\n\";\necho \"\\n-- Testing new DateTimeZone() with more than expected no. of arguments --\\n\";\n$timezone = \"GMT\";\n$extra_arg = 99;\ntry {\n    new DateTimeZone($timezone, $extra_arg);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
