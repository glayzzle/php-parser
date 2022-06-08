// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_construct_error.phpt
  it("Test new DateTime() : error conditions", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\necho \"*** Testing date_create() : error conditions ***\\n\";\necho \"\\n-- Testing new DateTime() with more than expected no. of arguments --\\n\";\n$time = \"GMT\";\n$timezone  = timezone_open(\"GMT\");\n$extra_arg = 99;\ntry {\n    var_dump( new DateTime($time, $timezone, $extra_arg) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
